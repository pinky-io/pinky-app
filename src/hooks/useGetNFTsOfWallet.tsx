import { Network, Alchemy } from "alchemy-sdk";

const settings = {
  apiKey: "x97VSdTdeVeFEUpCDRH1ENsSyi5PYPIP",
  network: Network.ETH_GOERLI,
};

const alchemy = new Alchemy(settings);

export const useGetNFtsOfWallet = async (walletAddress: string) => {
  const nfts = await alchemy.nft.getNftsForOwner(walletAddress);

  return nfts;
};
