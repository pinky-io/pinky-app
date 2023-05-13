import { useState } from "react";
import { RentContainer } from "../";
import styled from "@emotion/styled";
import { NFTCard, NFTData } from "../NFTCard";
import { BorrowModal } from "../BorrowModal";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  gap: 1rem;
`;

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

const Home = () => {
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
      <RentContainer />

      <BorrowModal
        borrowModalOpen={borrowModalOpen}
        handleBorrowModalClose={handleBorrowModalClose}
        nft={activeNft}
      />
      <Container>
        <NFTCard openLendModal={handleBorrowModalOpen} {...props} />
        <NFTCard openLendModal={handleBorrowModalOpen} {...props} />
        <NFTCard openLendModal={handleBorrowModalOpen} {...props} />
        <NFTCard openLendModal={handleBorrowModalOpen} {...props} />
      </Container>
    </>
  );
};

export default Home;
