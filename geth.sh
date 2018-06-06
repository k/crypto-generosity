#!/bin/sh


geth --fast --cache=1048 --rinkeby --keystore "/Users/kenny/Library/Ethereum/keystore"  --unlock "2" --rpc --rpcapi "eth,net,web3" --rpccorsdomain '*' --rpcaddr localhost --rpcport 8545

