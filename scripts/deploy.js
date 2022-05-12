const { ethers } = require("hardhat");

async function main() {
  const NFTContract = await ethers.getContractFactory("GameItem");
  const deployedNFTContract = await NFTContract.deploy({
    gasPrice: 50000000000,
  });

  console.log("NFT Contract address:", deployedNFTContract.address);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();
