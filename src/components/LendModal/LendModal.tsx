import { useState } from "react"

import { Box, Typography } from "@mui/material"
import { Subtitle } from ".."
import { ActionModal } from "../ActionModal"
import { NFTData } from "../NFTCard"
import { Image } from ".."
import { Button } from "../Button"

import { TextField } from "@mui/material"

import s from "./LendModal.module.css"

type BorrowModalProps = {
  lendModalOpen: boolean
  handleLendModalClose: () => void
  nft: NFTData | null
}

export const LendModal = ({
  handleLendModalClose,
  lendModalOpen,
  nft,
}: BorrowModalProps) => {
  const [day, setDay] = useState(1)
  const [price, setPrice] = useState(0)

  if (!nft) return null

  const handleLend = () => {
    console.log(day, price)
    //TODO SINANE appelé envoyer la demande pour lend un nft avec le nombre de jours = day et priceperday = price
  }
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
              Rent
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
