const hre = require("hardhat");
async function main() {
  const NFT = await hre.ethers.getContractFactory("NeurLoot");
  // OLD PROD: 0x274Ee74012D8cCFddDa14cB5dddE79D0cDFA215A
  // FIRST TEST: 0xCE12589cB48E579F3cA419b70096fb34235ff7CF
  // 0x05DfF05a33aca5D190F8F78A47aeBaa002f55d31
  const CONTRACT_ADDRESS = "0xBd770416a3345F91E4B34576cb804a576fa48EB1"
  const WALLET = "0x2e039dbc68e81D1cA1344fBe4C5039f8c0799258"
  const contract = NFT.attach(CONTRACT_ADDRESS);
  // await contract.safeMint(WALLET, 1);
  await contract.mint(WALLET, "uri");
  console.log("NFT minted:", contract);
}
main().then(() => process.exit(0)).catch(error => {
  console.error(error);
  process.exit(1);
});