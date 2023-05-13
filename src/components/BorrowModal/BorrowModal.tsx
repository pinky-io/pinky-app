import { useState } from "react"

import { Box, Typography } from "@mui/material"
import { Subtitle } from ".."
import { ActionModal } from "../ActionModal"
import { NFTData } from "../NFTCard"
import { Image } from ".."
import { Button } from "../Button"

import { TextField } from "@mui/material"

import s from "./BorrowModal.module.css"

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
  const [day, setDay] = useState(1)
  if (!nft) return null

  const handleRent = () => {
    console.log(day)
    //TODO SINANE appelé envoyer la demande pour rent un nft avec le nombre de jours = day
  }

  return (
    <ActionModal
      title=""
      open={borrowModalOpen}
      handleClose={handleBorrowModalClose}
    >
      <div className={s.container}>
        <div className={s.leftContainer}>
          <div>
            <p className={s.title}>Rent an NFT</p>
            <div className={s.inputContainer}>
              <TextField
                id="number-days"
                variant="standard"
                label="number of days"
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
              Price per day : {nft.lendPrice}
              {nft.currency}
            </p>
            <p className={s.price}>
              Total price : {(day || 0) * (nft.lendPrice || 0)} {nft.currency}
            </p>
            <Button className={s.button} onClick={handleRent}>
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
