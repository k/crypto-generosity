/* global artifacts */
var Generosity = artifacts.require("./Generosity.sol");

module.exports = function(deployer) {
  deployer.deploy(Generosity);
};
