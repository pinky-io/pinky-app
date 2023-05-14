import { useState, useEffect } from "react";

import { Box, Typography } from "@mui/material";
import { Subtitle } from "..";
import { ActionModal } from "../ActionModal";
import { ImageContainer, NFTData } from "../NFTCard";
import { Button } from "../Button";
import { TransacLoading } from "../";

import s from "./BorrowModal.module.css";
import { useBorrow } from "../../hooks/useBorrow";
import { Asset } from "@center-inc/react";
import { formatEther } from "viem";

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
  const [isShowLoading, setIsShowLoading] = useState<boolean>(false);

  const { borrow, isLoading, isSuccess, isError } = useBorrow(
    nft?.collection.address || "",
    nft?.tokenId || "",
    nft?.lendPrice || 0,
    nft?.lendDuration || 0
  );

  useEffect(() => {
    if (isLoading && !isShowLoading) setIsShowLoading(true);
  }, [isLoading, isShowLoading]);

  if (!nft) return null;

  const handleBorrow = () => {
    borrow();
  };

  return (
    <ActionModal
      title=""
      open={borrowModalOpen}
      handleClose={handleBorrowModalClose}
    >
      <div className={s.container}>
        {isShowLoading ? (
          <TransacLoading
            isLoading={isLoading}
            isSuccess={isSuccess}
            isError={isError}
            onCloseModal={handleBorrowModalClose}
            onClose={() => setIsShowLoading(false)}
          />
        ) : null}
        <div className={s.leftContainer}>
          <p className={s.title}>Rent an NFT</p>
          <div>
            <p className={s.price}>
              Price per day : {formatEther(BigInt(nft.lendPrice || 0))}{" "}
              {nft.currency}
            </p>
            <p className={s.price}>
              Total price :{" "}
              {formatEther(
                BigInt((nft.lendDuration || 0) * (nft.lendPrice || 0))
              )}{" "}
              {nft.currency}
            </p>
            <Button className={s.button} onClick={handleBorrow}>
              Borrow
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
