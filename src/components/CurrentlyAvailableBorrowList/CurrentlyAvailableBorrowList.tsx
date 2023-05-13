import { useState } from "react";
import { BorrowModal } from "../BorrowModal";
import { NFTData } from "../NFTCard";
import { NFTList } from "../NFTList";
import { useAvailableNFTBorrow } from "../../hooks/useAvailableNFTBorrow";

export const CurrentlyAvailableBorrowList = () => {
  const [borrowModalOpen, setBorrowModalOpen] = useState(false);
  const [activeNft, setactiveNft] = useState<NFTData | null>(null);

  const { data, eventsLoading } = useAvailableNFTBorrow();

  console.log({ data, eventsLoading });

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
        nfts={(data?.lends || []).map((lend: any) => ({
          collection: {
            address: lend.collectionAddress,
            name: "name",
          },
          tokenId: lend.tokenID,
          lendPrice: Number(lend.pricePerDay),
          lendDuration: Number(lend.duration),
          type: "AVAILABLE",
          currency: "ETH",
        }))}
        openLendModal={handleBorrowModalOpen}
      />
    </>
  );
};
