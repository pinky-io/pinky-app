import { useState } from "react";
import { Image, RentContainer, Subtitle } from "../";
import { ActionModal } from "../ActionModal";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { NFTCard, NFTData } from "../NFTCard";
import { Button } from "../Button";

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
  const [lendModalOpen, setLendModalOpen] = useState(false);
  const [activeNft, setactiveNft] = useState<NFTData | null>(null);

  const handleLendModalOpen = (nft: NFTData) => {
    setactiveNft(nft);
    setLendModalOpen(true);
  };

  const handleLendModalClose = () => {
    setactiveNft(null);
    setLendModalOpen(false);
  };

  return (
    <>
      <RentContainer />

      <ActionModal
        title="Lend an NFT"
        open={lendModalOpen}
        handleClose={handleLendModalClose}
      >
        <>
          <Box display="flex" flexDirection="column" justifyContent="flex-end">
            <Typography>Duration : {activeNft?.lendDuration} days</Typography>
            <Typography>Price per day : {activeNft?.lendPrice} ETH</Typography>
            <Typography>
              TotalPrice :{" "}
              {(activeNft?.lendDuration || 0) * (activeNft?.lendPrice || 0)} ETH
            </Typography>
          </Box>

          <Box maxWidth="200px">
            <Image src="/nft.png" alt="nft" />
            <Box my={2}>
              <Typography>{activeNft?.collection.name}</Typography>
              <Subtitle>#{activeNft?.tokenId}</Subtitle>
            </Box>

            <Button>Lend</Button>
          </Box>
        </>
      </ActionModal>
      <Container>
        <NFTCard openLendModal={handleLendModalOpen} {...props} />
        <NFTCard openLendModal={handleLendModalOpen} {...props} />
        <NFTCard openLendModal={handleLendModalOpen} {...props} />
        <NFTCard openLendModal={handleLendModalOpen} {...props} />
      </Container>
    </>
  );
};

export default Home;
