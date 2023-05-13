import { Box, Typography } from "@mui/material";
import { Subtitle } from "..";
import { ActionModal } from "../ActionModal";
import { NFTData } from "../NFTCard";
import { Image } from "..";
import { Button } from "../Button";

type BorrowModalProps = {
  borrowModalOpen: boolean;
  handleBorrowModalClose: () => void;
  nft: NFTData | null;
};

export const BorrowModal = ({
  nft,
  handleBorrowModalClose,
  borrowModalOpen,
}: BorrowModalProps) => {
  if (!nft) return null;
  return (
    <ActionModal
      title="Lend an NFT"
      open={borrowModalOpen}
      handleClose={handleBorrowModalClose}
    >
      <>
        <Box display="flex" flexDirection="column" justifyContent="flex-end">
          <Typography>Duration : {nft.lendDuration} days</Typography>
          <Typography>Price per day : {nft.lendPrice} ETH</Typography>
          <Typography>
            TotalPrice : {(nft.lendDuration || 0) * (nft.lendPrice || 0)} ETH
          </Typography>
        </Box>

        <Box maxWidth="200px">
          <Image src="/nft.png" alt="nft" />
          <Box my={2}>
            <Typography>{nft.collection.name}</Typography>
            <Subtitle>#{nft.tokenId}</Subtitle>
          </Box>

          <Button>Rent</Button>
        </Box>
      </>
    </ActionModal>
  );
};
