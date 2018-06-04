/* @flow */

import React, { Component } from "react";
import "antd/dist/antd.css";
import { Layout, Button, Menu, Icon, Tooltip } from "antd";

import { GenerosityForm, HomeIcon } from "./components";
import GenerosityContract from "../build/contracts/Generosity.json";
import getWeb3 from "./utils/getWeb3";

const { Header, Content, Footer } = Layout;

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
    llIndex: { call: string => Promise<string> },
    withdraw: Object => void,
    allEvents: (
        ?Object,
        ?Object,
        ?(error: Error, event: mixed) => void
    ) => { watch: Function }
};
type GenerosityContractType = {
    setProvider: Object => void,
    deployed: () => Promise<GenerosityInstanceType>
};

type AppState = {
    reach: number,
    generosity: ?GenerosityContractType,
    web3: ?Object,
    gifts: number,
    current: "reach" | "give" | "receive"
};

class App extends Component<{}, AppState> {
    constructor(props: {}) {
        super(props);

        this.state = {
            reach: 0,
            generosity: null,
            web3: null,
            gifts: 0,
            current: "give"
        };
    }

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
            generosityInstance: GenerosityInstanceType
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
    readReach = async (
        addr: string,
        instance: GenerosityInstanceType
    ): Promise<number> => {
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
        return reach;
    };

    handleSubmit = ({ address }: { address: string }) => this.giveToAddress(address);

    handleClick = (e: any) => {
        this.setState({
            current: e.key
        });
    };

    render() {
        const selected = this.state.current;
        return (
            <Layout className="layout" style={{ minHeight: "100vh" }}>
                <Header>
                    <HomeIcon />
                    <Menu
                        theme="dark"
                        onClick={this.handleClick}
                        mode="horizontal"
                        selectedKeys={[selected]}
                        style={{ lineHeight: "64px" }}
                    >
                        <Menu.Item key="reach">
                            <Icon type="rocket" /> Reach
                        </Menu.Item>
                        <Menu.Item key="give">
                            <Icon type="mail" /> Give
                        </Menu.Item>
                        <Menu.Item key="receive">
                            <Icon type="gift" /> Receive
                        </Menu.Item>
                    </Menu>
                </Header>
                <Content style={{ padding: "24px", flex: 1 }}>
                    {selected === "reach" && (
                        <p>
                            Your generosity has reached {this.state.reach}{" "}
                            person(s).{" "}
                            <Tooltip title="Reach is total number of people in your generosity tree. For example, if you give to Joe and Joe gives to Alice and Bob then your reach would be 3.">
                                <Icon type="info-circle" />
                            </Tooltip>
                        </p>
                    )}
                    {selected === "give" && (
                        <div>
                            <p>
                                Enter in your friend's ETH address and give them
                                a 0.01 ETH gift!
                            </p>
                            <GenerosityForm onSubmit={this.handleSubmit} />
                        </div>
                    )}
                    {selected === "receive" && (
                        <div>
                            <p>
                                You have{" "}
                                {this.state.gifts
                                    ? "a gift to receive!"
                                    : "no gifts."}
                            </p>
                            <Button onClick={this.handleWithdraw}>
                                Receive
                            </Button>
                        </div>
                    )}
                </Content>
                <Footer style={{ textAlign: "center" }}>
                    Created by Kenny Bambridge{" "}
                    <a>https://github.com/k/crypto-generosity</a>
                </Footer>
            </Layout>
        );
    }
}

export default App;
