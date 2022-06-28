import { ethers } from "hardhat";

async function main() {
  const Bcv = await ethers.getContractFactory("BCVToken");
  console.log("Deploying Bcv...");
  const bcv = await Bcv.deploy();

  await bcv.deployed();

  console.log("Box deployed to:", bcv.address);
}

main()
  .then(() => {
    process.exitCode = 0;
  })
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
