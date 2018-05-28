/* @flow */

import React, { Component } from "react";
import GenerosityContract from "../build/contracts/Generosity.json";
import getWeb3 from "./utils/getWeb3";

import "./css/oswald.css";
import "./css/open-sans.css";
import "./css/pure-min.css";
import "./App.css";

const GIVE_AMOUNT = 10000000000000000;
const GIVE_GAS = 150000;
const WITHDRAW_GAS = 52000;
const RAKE = GIVE_AMOUNT / 100; // For paying contract gas prices
const NET = GIVE_AMOUNT - RAKE;

type MappingCallNumber = { call: string => { c: Array<number> } };
type MappingCallAddress = { call: string => Promise<string> };

type GenerosityInstanceType = {
        give: (string, Object) => void,
        pendingWithdrawals: MappingCallNumber,
        receiverToGiver: MappingCallAddress,
        llIndex: { call: (string) => Promise<string> },
        withdraw: Object => void,
        allEvents: (
            ?Object,
            ?Object,
            ?(error: Error, event: mixed) => void
        ) => { watch: Function }
};
type GenerosityContractType = {
    setProvider: Object => void,
    deployed: () => Promise<GenerosityInstanceType>,
};

type AppState = {
    reach: number,
    generosity: ?GenerosityContractType,
    web3: ?Object,
    gifts: number
};

class App extends Component<{}, AppState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            reach: 0,
            generosity: null,
            web3: null,
            gifts: 0
        };
    }

    addressInput: ?HTMLInputElement = null;

    componentWillMount() {
        // Get network provider and web3 instance.
        // See utils/getWeb3 for more info.

        getWeb3
            .then(results => {
                this.setState({
                    web3: results.web3
                });

                // Instantiate contract once web3 provided.
                this.instantiateContract();
            })
            .catch(e => {
                console.error(e);
            });
    }

    instantiateContract() {
        /*
     * SMART CONTRACT EXAMPLE
     *
     * Normally these functions would be called in the context of a
     * state management library, but for convenience I've placed them here.
     */

        const contract = require("truffle-contract");
        const generosity: GenerosityContractType = contract(GenerosityContract);
        const web3 = this.state.web3;
        if (web3 == null) {
            throw new Error("Web 3 must be defined");
        }
        generosity.setProvider(web3.currentProvider);
        this.setState({ generosity }, () => {
            this.web3Call((accounts, instance): * => {
                instance.allEvents().watch((err, event) => {
                    err && console.error(err);
                    event && console.log(event);
                });
            });

            setInterval(() => {
                this.web3Call(async (accounts, instance) => {
                    const gifts = await instance.pendingWithdrawals.call(
                        accounts[0]
                    );
                    const reach = await this.readReach(accounts[0], instance);
                    this.setState({ reach, gifts: gifts.c[0] });
                });
            }, 1000);
        });
    }

    web3Call = async (
        func: (
            accounts: Array<string>,
            generosityInstance: GenerosityInstanceType,
        ) => void | Promise<void>
    ): Promise<void> => {
        const { web3, generosity } = this.state;
        if (web3 == null || generosity == null)
            throw new Error("Web3 or contract not ready");
        web3.eth.getAccounts(async (error, accounts): Promise<void> => {
            const instance = await generosity.deployed();
            func(accounts, instance);
        });
    };

    giveToAddress = (address: string) => {
        // Get accounts.
        this.web3Call(async (accounts, generosityInstance) => {
            await generosityInstance.give(address, {
                from: accounts[0],
                value: GIVE_AMOUNT,
                gas: GIVE_GAS
            });
            const reach = await this.readReach(accounts[0], generosityInstance);
            this.setState({ reach });
        });
    };

    handleWithdraw = () => {
        // Get accounts.
        this.web3Call((accounts, instance) => {
            instance.withdraw({ from: accounts[0], gas: WITHDRAW_GAS });
        });
    };

    /**
     * NOTE: This algorithm is roughly O(n^2) b = branching factor ~ 3. worst case
     *       In the future this should be cached off-chain by subscribing to transactions with this
     *       conract address.
     */
    readReach = async (addr: string, instance: GenerosityInstanceType): Promise<number> => {
        const first = await instance.llIndex.call("0x0");
        let curr = first;
        if (0 === parseInt(curr)) {
            return 0;
        }
        let reach: number = 0;
        do {
            let giver = await instance.receiverToGiver.call(curr);
            if (giver === addr) {
                reach += 1;
                reach += await this.readReach(curr, instance);
            }
            curr = await instance.llIndex.call(curr);
        } while (curr !== first);
        return reach
    }

    handleSubmit = (event: SyntheticEvent<HTMLFormElement>) => {
        if (this.addressInput != null) {
            const { addressInput } = this;
            this.giveToAddress(addressInput.value);
        }
        event.preventDefault();
    };

    render() {
        return (
            <div className="App">
                <nav className="navbar pure-menu pure-menu-horizontal">
                    <a href="#" className="pure-menu-heading pure-menu-link">
                        Truffle Box
                    </a>
                </nav>
                <main className="container">
                    <div className="pure-g">
                        <div className="pure-u-1-1">
                            <p>
                                Your generosity has reached{" "}
                                {this.state.reach} person(s);
                            </p>
                            <form onSubmit={this.handleSubmit}>
                                <input
                                    ref={(el: ?HTMLInputElement) => {
                                        this.addressInput = el;
                                    }}
                                    name="address"
                                    placeholder="Enter target address here"
                                    style={{ minWidth: "250px" }}
                                />
                                <input type="submit" value="Send" />
                            </form>
                            <p>
                                You have{" "}
                                {this.state.gifts
                                    ? "a gift to receive!"
                                    : "no gifts."}
                            </p>
                            <button onClick={this.handleWithdraw}>
                                Receive
                            </button>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
