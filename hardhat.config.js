require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
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
