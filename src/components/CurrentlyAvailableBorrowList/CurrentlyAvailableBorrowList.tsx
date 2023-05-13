import { useState } from "react";
import { BorrowModal } from "../BorrowModal";
import { NFTData } from "../NFTCard";
import { NFTList } from "../NFTList";

const props = {
  collection: {
    name: "DeGod",
    address: "0",
  },
  tokenId: "0",
  lendPrice: 0.1,
  lendDuration: 2,
  currency: "ETH",
  type: "AVAILABLE",
} as const;

export const CurrentlyAvailableBorrowList = () => {
  const [borrowModalOpen, setBorrowModalOpen] = useState(false);
  const [activeNft, setactiveNft] = useState<NFTData | null>(null);

  const handleBorrowModalOpen = (nft: NFTData) => {
    setactiveNft(nft);
    setBorrowModalOpen(true);
  };

  const handleBorrowModalClose = () => {
    setactiveNft(null);
    setBorrowModalOpen(false);
  };

  return (
    <>
      <BorrowModal
        borrowModalOpen={borrowModalOpen}
        handleBorrowModalClose={handleBorrowModalClose}
        nft={activeNft}
      />
      <NFTList
        nfts={[props, props, props, props]}
        openLendModal={handleBorrowModalOpen}
      />
    </>
  );
};