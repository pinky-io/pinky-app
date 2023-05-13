import { useState } from "react";
import { BorrowModal } from "../BorrowModal";
import { NFTData, NFTCard } from "../NFTCard";
import styled from "@emotion/styled";
import { NFTList } from "../NFTList";

const props = {
  collection: {
    name: "DeGod",
    address: "0",
  },
  tokenId: "0",
  lendPrice: 0.1,
  lendDuration: 2,
  status: "AVAILABLE",
} as const;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  gap: 1rem;
`;

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
