/* @flow */

import React, { Component } from "react";
import GenerosityContract from "../build/contracts/Generosity.json";
import getWeb3 from "./utils/getWeb3";

import "./css/oswald.css";
import "./css/open-sans.css";
import "./css/pure-min.css";
import "./App.css";

const GIVE_AMOUNT = 10000000000000000;
const RAKE = GIVE_AMOUNT / 100; // For paying contract gas prices
const NET = GIVE_AMOUNT - RAKE;

type TestEvent = {
    curr: string,
};

type MappingCall = { call: string => { c: Array<number> } };

type GenerosityContractType = {
    setProvider: Object => void,
    deployed: () => Promise<{
        give: (string, Object) => void,
        reputation: MappingCall,
        pendingWithdrawals: MappingCall,
        withdraw: (Object) => void,
        Test: (?Object, ?Object, ?(error: Error, event: TestEvent) => void) => { watch: Function },
    }>
};

type AppState = {
    repValue: number,
    generosity: ?GenerosityContractType,
    web3: ?Object,
    gifts: number,
};

class App extends Component<{}, AppState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            repValue: 0,
            generosity: null,
            web3: null,
            gifts: 0,
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

        this.setState({ generosity });
        generosity.deployed().then(instance => {
            instance.allEvents().watch(
            (err, event) => {
                err && console.error(err);
                event && console.log(event);
            });
            setInterval(() => {
                web3.eth.getAccounts(async (error, accounts) => {
                    const result = await instance.reputation.call(accounts[0]);
                    const gifts = await instance.pendingWithdrawals.call(accounts[0]);
                    debugger;
                    this.setState({ repValue: result.c[0], gifts: gifts.c[0] });
                });
            }, 100);
        });

        // Declaring this for later so we can chain functions on SimpleStorage.
    }

    giveToAddress = (address: string) => {
        var generosityInstance;

        // Get accounts.
        const { web3, generosity } = this.state;
        if (web3 == null || generosity == null) return;
        web3.eth.getAccounts((error, accounts) => {
            generosity
                .deployed()
                .then(instance => {
                    generosityInstance = instance;

                    // Stores a given value, 5 by default.
                    return generosityInstance.give(address, {
                        from: accounts[0],
                        value: GIVE_AMOUNT,
                        gas: 1000000
                    });
                })
                .then(result => {
                    // Get the value from the contract to prove it worked.
                    return generosityInstance.reputation.call(accounts[0]);
                })
                .then(result => {
                    // Update state with the result.
                    return this.setState({ repValue: result.c[0] });
                });
        });
    };

    handleWithdraw = () => {
        // Get accounts.
        const { web3, generosity } = this.state;
        if (web3 == null || generosity == null) return;
        web3.eth.getAccounts(async (error, accounts): * => {
            const instance = await generosity.deployed();
            instance.withdraw({ from: accounts[0], gas: 52000 });
        })
    };

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
                            <p>Your generosity has reached {this.state.repValue} person(s);</p>
                            <form onSubmit={this.handleSubmit}>
                                <input
                                    ref={(el: ?HTMLInputElement) => {
                                        this.addressInput = el;
                                    }}
                                    name="address"
                                    placeholder="Enter target address here"
                                    style={{ minWidth: '250px' }}
                                />
                                <input type="submit" value="Send" />
                            </form>
                            <p>You have {this.state.gifts ? 'a gift to receive!' : 'no gifts.'}</p>
                            <button onClick={this.handleWithdraw}>Receive</button>
                        </div>
                    </div>
                </main>
            </div>
        );
    }
}

export default App;
