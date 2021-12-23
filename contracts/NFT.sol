pragma solidity ^0.8.0;
import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/utils/Strings.sol";

contract NeurLoot is ERC721, Ownable {

  using Counters for Counters.Counter;
  using Strings for uint256;
  Counters.Counter private _tokenIds;
  mapping (uint256 => string) private _tokenURIs;

  uint256 MAX_TOKENS_PER_SALE = 1000;
  uint256 MAX_TOKENS = 8000;
  uint256 price = 0;

  string baseURI = "https://nft.neurloot.com/metadata/";
  string endURI = ".json";
  
  constructor() ERC721("principlerevolutionpresentation", "prp") {}

  function _setTokenURI(uint256 tokenId, string memory _tokenURI)
    internal
    virtual
  {
    _tokenURIs[tokenId] = _tokenURI;
  }
  function tokenURI(uint256 tokenId) 
    public
    view
    virtual
    override
    returns (string memory)
  {
    require(_exists(tokenId), "ERC721Metadata: URI query for nonexistent token");
    string memory _tokenURI = _tokenURIs[tokenId];
    return _tokenURI;
  }
  // function safeMint(address recipient, uint256 _amount) public payable {
  function mint(address recipient, string memory uri)
    public
    returns (uint256)
  {
    // require(MAX_TOKENS > _amount + _tokenIds.current(), "Not enough tokens left to buy.");
    // require(_amount > 0 && _amount < MAX_TOKENS_PER_SALE + 1, "Amount of tokens exceeds amount of tokens you can purchase in a single purchase.");
    // require(msg.value >= price * _amount, "Amount of ether sent not correct.");
    // for(uint256 i = 0; i < _amount; i++) {
      _tokenIds.increment();
      uint256 newItemId = _tokenIds.current();
      _mint(recipient, newItemId);
      string memory uri = string(abi.encodePacked(baseURI, Strings.toString(newItemId), endURI));
      _setTokenURI(newItemId, uri);
      return newItemId;
    // }
  }
}