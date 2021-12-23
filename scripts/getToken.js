const hre = require("hardhat");
async function main() {
  const NFT = await hre.ethers.getContractFactory("NeurLoot");
  // OLD PROD: 0x274Ee74012D8cCFddDa14cB5dddE79D0cDFA215A
  // FIRST TEST: 0xCE12589cB48E579F3cA419b70096fb34235ff7CF
  const CONTRACT_ADDRESS = "0xBd770416a3345F91E4B34576cb804a576fa48EB1"
  const contract = NFT.attach(CONTRACT_ADDRESS);
  const id = 1;
  const owner = await contract.ownerOf(id);
  console.log("NFT: ", id);
  // console.log("Owner: ", owner);
  // const uri = await contract.tokenURI(id);
  // console.log("URI: ", uri);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});