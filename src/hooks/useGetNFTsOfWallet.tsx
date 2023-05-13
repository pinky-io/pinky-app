import { Network, Alchemy, OwnedNft } from "alchemy-sdk";
import { useEffect, useState } from "react";

const settings = {
  apiKey: "x97VSdTdeVeFEUpCDRH1ENsSyi5PYPIP",
  network: Network.ETH_GOERLI,
};

const alchemy = new Alchemy(settings);

export const useGetNFtsOfWallet = async (walletAddress: string) => {
  const [nfts, setNfts] = useState<OwnedNft[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchNfts() {
      setLoading(true);

      try {
        const nftsFetched = await alchemy.nft.getNftsForOwner(walletAddress);
        setNfts(nftsFetched.ownedNfts);
      } catch (error) {
        console.error(error);

        const nftsFetched = await alchemy.nft.getNftsForOwner(walletAddress);
        setNfts(nftsFetched.ownedNfts);
        setLoading(false);
      } finally {
        setLoading(false);
      }
    }

    fetchNfts();
  }, [walletAddress]);

  return { loading, nfts };
};
