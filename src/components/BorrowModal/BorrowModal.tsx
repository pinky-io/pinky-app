import { useState } from "react"

import { Box, Typography } from "@mui/material"
import { Subtitle } from ".."
import { ActionModal } from "../ActionModal"
import { NFTData } from "../NFTCard"
import { Image } from ".."
import { Button } from "../Button"
import { TransacLoading } from "../"

import s from "./BorrowModal.module.css"
import { useBorrow } from "../../hooks/useBorrow"

type BorrowModalProps = {
  borrowModalOpen: boolean
  handleBorrowModalClose: () => void
  nft: NFTData | null
}

export const BorrowModal = ({
  nft,
  handleBorrowModalClose,
  borrowModalOpen,
}: BorrowModalProps) => {
  // TODO SINANE SUPPRIMER LES STATES
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [isSuccess, setIsSuccess] = useState<boolean>(false)
  const [isShowLoading, setIsShowLoading] = useState<boolean>(false)

  const { borrow } = useBorrow(
    nft?.collection.address || "",
    nft?.tokenId || "",
    nft?.lendPrice || 0,
    nft?.lendDuration || 0
  )

  if (!nft) return null

  const handleBorrow = () => {
    borrow()
  }

  return (
    <ActionModal
      title=""
      open={borrowModalOpen}
      handleClose={handleBorrowModalClose}
    >
      {/* <button onClick={() => setIsLoading(!isLoading)}>set Loading</button>
      <button onClick={() => setIsSuccess(!isSuccess)}>set Success</button>
      <button onClick={() => setIsShowLoading(!isShowLoading)}>
        set ShowLoading
      </button> */}
      <div className={s.container}>
        {isShowLoading ? (
          <TransacLoading
            isLoading={isLoading}
            isSuccess={isSuccess}
            onCloseModal={handleBorrowModalClose}
            onClose={() => setIsShowLoading(false)}
          />
        ) : null}
        <div className={s.leftContainer}>
          <p className={s.title}>Rent an NFT</p>
          <div>
            <p className={s.price}>
              Price per day : {nft.lendPrice} {nft.currency}
            </p>
            <p className={s.price}>
              Total price : {(nft.lendDuration || 0) * (nft.lendPrice || 0)}{" "}
              {nft.currency}
            </p>
            <Button className={s.button} onClick={handleBorrow}>
              Borrow
            </Button>
          </div>
        </div>
        <div className={s.rightContainer}>
          <Image src="/nft.png" alt="nft" />
          <Box my={2}>
            <Typography>{nft.collection.name}</Typography>
            <Subtitle>#{nft.tokenId}</Subtitle>
          </Box>
        </div>
      </div>
    </ActionModal>
  )
}
