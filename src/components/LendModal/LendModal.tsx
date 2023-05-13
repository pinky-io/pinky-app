import { useState } from "react";

import { Box, Typography } from "@mui/material";
import { Subtitle } from "..";
import { ActionModal } from "../ActionModal";
import { ImageContainer, NFTData } from "../NFTCard";
import { Button } from "../Button";

import { TextField } from "@mui/material";

import s from "./LendModal.module.css";
import { useLend } from "../../hooks/useLend";
import { Asset } from "@center-inc/react";

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
  const [day, setDay] = useState(1);
  const [price, setPrice] = useState(0);

  const { lend } = useLend(nft?.collection.address || "");

  if (!nft) return null;

  const handleLend = () => {
    lend({
      address: nft.collection.address,
      tokenId: nft.tokenId,
      price,
      duration: day,
    });
  };

  return (
    <ActionModal
      title=""
      open={lendModalOpen}
      handleClose={handleLendModalClose}
    >
      <div className={s.container}>
        <div className={s.leftContainer}>
          <div>
            <p className={s.title}>Lend your NFT</p>
            <div className={s.inputContainer}>
              <TextField
                id="price"
                variant="standard"
                label="Daily price"
                type="number"
                style={{
                  width: "70%",
                }}
                InputProps={{
                  inputProps: { min: 0, step: 0.1 },
                  style: {
                    color: "rgba(255, 255, 255, 0.87)",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.87)",
                  },
                }}
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}
              />
            </div>
            <div className={s.inputContainer}>
              <TextField
                id="number-days"
                variant="standard"
                label="Maximum duration"
                type="number"
                style={{
                  width: "70%",
                }}
                InputProps={{
                  inputProps: { min: 1, max: nft.lendDuration, step: 1 },
                  style: {
                    color: "rgba(255, 255, 255, 0.87)",
                    borderBottom: "1px solid rgba(255, 255, 255, 0.87)",
                  },
                }}
                value={day}
                onChange={(e) => setDay(Number(e.target.value))}
              />
            </div>
          </div>
          <div>
            <p className={s.price}>
              Total price : {day * price} {nft.currency}
            </p>
            <Button className={s.button} onClick={handleLend}>
              Lend
            </Button>
          </div>
        </div>
        <div className={s.rightContainer}>
          <ImageContainer>
            <Asset
              address={nft.collection.address}
              tokenId={nft.tokenId}
              network="ethereum-goerli"
            />
          </ImageContainer>
          <Box my={2}>
            <Typography>{nft.collection.name}</Typography>
            <Subtitle>#{nft.tokenId}</Subtitle>
          </Box>
        </div>
      </div>
    </ActionModal>
  );
};
