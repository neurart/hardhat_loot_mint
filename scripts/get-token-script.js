const hre = require("hardhat");
async function main() {
  const NFT = await hre.ethers.getContractFactory("NeurLoot");
  const CONTRACT_ADDRESS = "0x274Ee74012D8cCFddDa14cB5dddE79D0cDFA215A"
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