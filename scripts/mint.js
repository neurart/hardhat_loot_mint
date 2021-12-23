const hre = require("hardhat");
async function main() {
  const NFT = await hre.ethers.getContractFactory("NeurLoot");
  const URI = "https://nft.neurloot.com/metadata/1.json"
  const WALLET_ADDRESS = "0xf7a643F3Dfc4b49a06e30AfA349ae13873FF86BD"
  const CONTRACT_ADDRESS = "0xCc64e1fFC33D7B99013AAb5D71E34886310040a0"
  const contract = NFT.attach(CONTRACT_ADDRESS);
  await contract.mint(WALLET_ADDRESS, URI);
  console.log("NFT minted:", contract);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});