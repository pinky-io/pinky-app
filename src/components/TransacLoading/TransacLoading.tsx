// import React from 'react';
import { FC } from "react"
import CircularProgress from "@mui/material/CircularProgress"
import IconButton from "@mui/material/IconButton"
import CloseIcon from "@mui/icons-material/Close"
import Alert from "@mui/material/Alert"

import s from "./TransacLoading.module.css"

interface TransacLoadingProps {
  isLoading: boolean
  isSuccess: boolean
  isError: boolean
  onClose: () => void
  onCloseModal: () => void
}

const TransacLoading: FC<TransacLoadingProps> = ({
  isLoading,
  isSuccess,
  isError,
  onClose,
  onCloseModal,
}) => {
  const handleClose = () => {
    if (!isLoading) {
      onClose()
      if (isSuccess) {
        onCloseModal()
      }
    }
  }

  return (
    <div className={s.container}>
      {!isLoading ? (
        <div className={s.closeContainer}>
          <IconButton aria-label="close" size="large" onClick={handleClose}>
            <CloseIcon fontSize="large" color="secondary" />
          </IconButton>
        </div>
      ) : null}
      <div className={s.subContainer}>
        {isLoading ? (
          <div>
            <p className={s.text}>Processing transaction</p>
            <div className={s.loaderContainer}>
              <CircularProgress color="secondary" style={{ margin: "auto" }} />
            </div>
          </div>
        ) : isSuccess ? (
          <Alert severity="success">Transaction confirmed</Alert>
        ) : isError ? (
          <Alert severity="error">Transaction failed</Alert>
        ) : null}
      </div>
    </div>
  )
}

export default TransacLoading
