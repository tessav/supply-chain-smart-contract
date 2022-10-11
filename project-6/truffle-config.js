const HDWalletProvider = require('truffle-hdwallet-provider');
const infuraKey = "f6ff9dd24bd543d9b8c1f1de4240b552";
//
// const fs = require('fs');
const mnemonic = "reform rocket grape carpet accuse surprise book buffalo crucial elevator relief beauty";

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*", // Match any network id
    },
    goerli: {
      provider: () => new HDWalletProvider(mnemonic, `https://goerli.infura.io/v3/${infuraKey}`),
        network_id: 5,       // rinkeby's id
        gas: 4500000,        // rinkeby has a lower block limit than mainnet
        gasPrice: 1000000,
        networkCheckTimeout: 10000,
    },
  },
  compilers: {
    solc: {
      //version: "0.5.1",
    }
  }
};
