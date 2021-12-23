const hre = require("hardhat");
async function main() {
  const NFT = await hre.ethers.getContractFactory("NeurLoot");
  const URI = "https://nft.neurloot.com/metadata/10.json"
  const WALLET_ADDRESS = "0xCFf5c2d2575BAe803CB8A7730CfD351bf22cd969"
  const CONTRACT_ADDRESS = "0x8Be503bcdEd90ED42Eff31f56199399B2b0154CA"
  const contract = NFT.attach(CONTRACT_ADDRESS);
  await contract.mint(WALLET_ADDRESS, URI);
  console.log("NFT minted:", contract);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});