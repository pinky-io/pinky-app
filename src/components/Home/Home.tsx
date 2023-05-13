import { useState } from "react";
import { RentContainer } from "../";
import { ActionModal } from "../ActionModal";
import { Box, Typography } from "@mui/material";
import styled from "@emotion/styled";
import { NFTCard } from "../NFTCard";

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
  lendDuration: 1,
  status: "AVAILABLE",
} as const;

const Home = () => {
  const [lendModalOpen, setLendModalOpen] = useState(false);

  const handleLendModalOpen = () => {
    setLendModalOpen(true);
  };

  const handleLendModalClose = () => {
    setLendModalOpen(false);
  };

  return (
    <>
      <RentContainer />

      <button onClick={handleLendModalOpen}>Open Modal</button>

      <ActionModal open={lendModalOpen} handleClose={handleLendModalClose}>
        <>
          <Typography>
            Do you want to lend this NFT on period X paying Y ?
          </Typography>
          <Box>
            <button onClick={handleLendModalClose}>No</button>
            <button onClick={handleLendModalClose}>Yes</button>
          </Box>
        </>
      </ActionModal>
      <Container>
        <NFTCard {...props} />

        <NFTCard {...props} />

        <NFTCard {...props} />

        <NFTCard {...props} />
      </Container>
    </>
  );
};

export default Home;
