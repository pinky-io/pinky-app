import { ActionModal } from "../ActionModal";
import { LendContainer } from "../LendForm";
import { NFTData } from "../NFTCard";

type BorrowModalProps = {
  lendModalOpen: boolean;
  handleLendModalClose: () => void;
  nft: NFTData | null;
};

export const LendModal = ({
  handleLendModalClose,
  lendModalOpen,
  nft,
}: BorrowModalProps) => {
  console.log({ nft });

  if (!nft) return null;
  return (
    <ActionModal
      title="Lend an NFT"
      open={lendModalOpen}
      handleClose={handleLendModalClose}
    >
      <LendContainer address={nft.collection.address} tokenId={nft.tokenId} />
    </ActionModal>
  );
};
