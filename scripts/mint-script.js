const hre = require("hardhat");
async function main() {
  const NFT = await hre.ethers.getContractFactory("NeurLoot");
  const URI = "https://nft.neurloot.com/metadata/5.json"
  const WALLET_ADDRESS = "0xCFf5c2d2575BAe803CB8A7730CfD351bf22cd969"
  const CONTRACT_ADDRESS = "0x18d6E82542ba2B30E8e18055097e48888d866A9F"
  const contract = NFT.attach(CONTRACT_ADDRESS);
  await contract.mint(WALLET_ADDRESS, URI);
  console.log("NFT minted:", contract);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});