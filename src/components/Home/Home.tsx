import { useState } from "react";
import { RentContainer } from "../";
import { ActionModal } from "../ActionModal";
import { Box, Typography } from "@mui/material";

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
    </>
  );
};

export default Home;
