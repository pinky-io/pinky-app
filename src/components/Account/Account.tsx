import { useState } from "react"

import { Box, Tab, Tabs } from "@mui/material"
import { colors } from "../../constants"
import s from "./Account.module.css"
import { NFTList } from "../NFTList"
import { mywallet, nftborrowed, nftlent } from "../../mock"
import { LendModal } from "../LendModal"
import { NFTData } from "../NFTCard"

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  }
}

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  )
}

const Account = () => {
  const [activeNft, setActiveNft] = useState<NFTData | null>(null)
  const [lendModalOpen, setlendModalOpen] = useState(false)
  const [value, setValue] = useState(0)

  const handleLendModalOpen = (nft: NFTData) => {
    setActiveNft(nft)
    setlendModalOpen(true)
  }

  const handleLendModalClose = () => {
    setActiveNft(null)
    setlendModalOpen(false)
  }

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  return (
    <div className={s.container}>
      <h1>Portfolio</h1>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="portfolio tab"
        indicatorColor="secondary"
      >
        {["My wallet", "NFT Borrowed", "NFT Lent"].map((label: string, i) => (
          <Tab
            key={`tab-account-${i}`}
            label={label}
            {...a11yProps(i)}
            style={{ color: value === i ? colors.SECONDARY : colors.FONT }}
          />
        ))}
      </Tabs>

      <TabPanel value={value} index={0}>
        <NFTList nfts={mywallet} openLendModal={handleLendModalOpen} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <NFTList nfts={nftborrowed} openLendModal={handleLendModalOpen} />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <NFTList nfts={nftlent} openLendModal={handleLendModalOpen} />
      </TabPanel>
      <LendModal
        lendModalOpen={lendModalOpen}
        handleLendModalClose={handleLendModalClose}
        nft={activeNft}
      />
    </div>
  )
}

export default Account
