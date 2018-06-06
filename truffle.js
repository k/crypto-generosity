module.exports = {
    networks: {
        development: {
            host: "localhost",
            port: 7545,
            network_id: "*" // Match any network id
        },
        rinkeby: {
            from: "0xF712b9B486475aDeEDa1d298B15a7774EF0B9a26",
            host: "localhost",
            port: 8545,
            network_id: "4",
        }
    }
};
