import CollectionConfigInterface from '../lib/CollectionConfigInterface';
import * as Networks from '../lib/Networks';
import * as Marketplaces from '../lib/Marketplaces';
import whitelistAddresses from './whitelist.json';

const CollectionConfig: CollectionConfigInterface = {
  testnet: Networks.polygonTestnet,
  mainnet: Networks.polygonMainnet,
  // The contract name can be updated using the following command:
  // yarn rename-contract NEW_CONTRACT_NAME
  // Please DO NOT change it manually!
  contractName: 'PitbullDogs',
  tokenName: 'Pitbull NFT CLub',
  tokenSymbol: 'PITBULL',
  hiddenMetadataUri: 'ipfs://QmeprvHNA49V6JbGLd19agE1ucP4xv6Ua71pPAWzSJHumw/hidden.json',
  maxSupply: 30,
  whitelistSale: {
    price: 0.005,
    maxMintAmountPerTx: 2,
  },
  preSale: {
    price: 0.007,
    maxMintAmountPerTx: 4,
  },
  publicSale: {
    price: 0.009,
    maxMintAmountPerTx: 10,
  },
  contractAddress: "0x57861f9D0D11e58E2e9240AC8e327f04cBf88B15",
  marketplaceIdentifier: 'Pitbull NFT CLub',
  marketplaceConfig: Marketplaces.openSea,
  whitelistAddresses,
};

export default CollectionConfig;
