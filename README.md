# Crypto Generosity Experiment

Lets see how far your generosity reaches.

## Generosity Contract

This contract provides facilities for sending gifts to people and in the form of a small amount of ethereum and a kind message.

### Getting Started

#### Requirements
- yarn (`npm install -g yarn`)
- truffle v4.1+ (`npm install -g truffle@^4.1`)
- MetaMask/Mist wallet to inject web3

1. Run `yarn` to install deps
1. Start Ganache or `truffle develop`
1. `truffle deploy` to deploy contract
1. `yarn start` to start react app
1. Ensure MetaMask/Mist is setup to talk to the correct local blockchain

## Roadmap

- [x] Modify UI to show rep and take in address for giving
- [x] Change SimpleStorage -> Generosity contract which logs generosity
- [x] Prevent sending to the same identity
- [x] Add withdraw contract call
- [ ] Show proper errors
  -  [ ] A receiver has already been given a gift (it causes the contract to fail)
  -  [ ] Attempt to give back to your giver
- [ ] Use some form of identity on the blockchain to verify the givers and receivers
- [ ] ~Switch the reputation gain to be on receipt of the gift~ [requires contract to be able to pay cost](https://blog.ethereum.org/2015/12/24/understanding-serenity-part-i-abstraction/)

## Optimizations
- [ ] ~Move updating reputation to a separate function which pulls from contract funds so gas price doesn't increase too much~ [requires contract to be able to pay cost](https://blog.ethereum.org/2015/12/24/understanding-serenity-part-i-abstraction/)
- [x] Do not cache the reputation in the contract instead recalculate in react app.

## Potential Features
- [ ] Require a message to be typed and sent
- [ ] Switch to use Github Primer or some other UI lib so it looks a bit better
