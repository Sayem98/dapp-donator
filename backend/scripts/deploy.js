const { ethers } = require("hardhat");

async function main() {
  const simpleDonationContract = await ethers.getContractFactory("Donation");

  // here we deploy the contract
  const deployedContract = await simpleDonationContract.deploy();

  // Wait for it to finish deploying
  await deployedContract.deployed();

  // print the address of the deployed contract
  console.log("Donation Contract Creator Address:", deployedContract.address);
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
