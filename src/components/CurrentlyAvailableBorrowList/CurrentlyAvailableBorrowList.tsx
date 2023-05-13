import { useState } from "react"
import { catalogue } from "../../mock"
import { BorrowModal } from "../BorrowModal"
import { NFTData } from "../NFTCard"
import { NFTList } from "../NFTList"

export const CurrentlyAvailableBorrowList = () => {
  const [borrowModalOpen, setBorrowModalOpen] = useState(false)
  const [activeNft, setactiveNft] = useState<NFTData | null>(null)

  const handleBorrowModalOpen = (nft: NFTData) => {
    setactiveNft(nft)
    setBorrowModalOpen(true)
  }

  const handleBorrowModalClose = () => {
    setactiveNft(null)
    setBorrowModalOpen(false)
  }

  return (
    <>
      <BorrowModal
        borrowModalOpen={borrowModalOpen}
        handleBorrowModalClose={handleBorrowModalClose}
        nft={activeNft}
      />
      <NFTList nfts={catalogue} openLendModal={handleBorrowModalOpen} />
    </>
  )
}
