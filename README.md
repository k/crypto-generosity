# Crypto Generosity Experiment

Lets see how far your generosity reaches.

## Generosity Contract

This contract provides facilities for sending gifts to people and in the form of a small amount of ethereum and a kind message.

## Roadmap

- [x] Modify UI to show rep and take in address for giving
- [x] Change SimpleStorage -> Generosity contract which logs generosity
- [ ] Switch the reputation gain to be on receipt of the gift
     - [ ] Create input for receiving a gift
     - [ ] Add receive contract call
- [ ] Use some form of identity on the blockchain to verify the givers and receivers
- [ ] Prevent sending to the same identity

## Optimizations
- [ ] Move updating reputation to a separate function which pulls from contract funds so gas price doesn't increase too much

## Potential Features
- [ ] Require a message to be typed and sent
- [ ] Switch to use Github Primer or some other UI lib so it looks a bit better
