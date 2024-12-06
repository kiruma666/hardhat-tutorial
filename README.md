# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a sample contract, a test for that contract, and a Hardhat Ignition module that deploys that contract.

Try running some of the following tasks:

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat ignition deploy ./ignition/modules/Lock.js
```

# Test the goattestnet
1. change the hardhat.config.js, replace the `your-private-key`
```
module.exports = {
  solidity: "0.8.28",
  networks: {
    hardhat: {
    },
    goattestnet: {
      url: "https://rpc.testnet3.goat.network",
      accounts: ["your-private-key"]
    },
    sepolia: {
      url: "https://ethereum-sepolia-rpc.publicnode.com",
      accounts: ["your-private-key"]
    },
  },
};
```
2. run the deploy command:
```
npx hardhat ignition deploy ./ignition/modules/Lock.js --network goattestnet
```
deploy to goattestnet will fail

```
npx hardhat ignition deploy ./ignition/modules/Lock.js --network sepolia 
```
deploy to sepolia will success
