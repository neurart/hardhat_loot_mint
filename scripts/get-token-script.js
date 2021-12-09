const hre = require("hardhat");
async function main() {
  const NFT = await hre.ethers.getContractFactory("NeurLoot");
  const CONTRACT_ADDRESS = "0x18d6E82542ba2B30E8e18055097e48888d866A9F"
  const contract = NFT.attach(CONTRACT_ADDRESS);
  const owner = await contract.ownerOf(2);
  console.log("Owner:", owner);
  const uri = await contract.tokenURI(2);
  console.log("URI: ", uri);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});