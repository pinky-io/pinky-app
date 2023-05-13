// import React from 'react';

import { useState } from "react"

import { Box, Tab, Tabs } from "@mui/material"
import { colors } from "../../constants"

import { NFTCard } from "../NFTCard"
import { mywallet, nftborrowed, nftlent } from "../../mock"

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

import s from "./Account.module.css"

const Account = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  console.log(mywallet)
  return (
    <div className={s.container}>
      <h1>Portfolio</h1>
      <Tabs value={value} onChange={handleChange} aria-label="portfolio tab">
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
        <div className={s.nftList}>
          {mywallet.map((nftData, i) => (
            <NFTCard
              key={`nft-wallet-${i}`}
              openLendModal={() => {
                return null
              }}
              {...nftData}
              type="MYWALLET"
            />
          ))}
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className={s.nftList}>
          {nftborrowed.map((nftData, i) => (
            <NFTCard
              key={`nft-wallet-${i}`}
              openLendModal={() => {
                return null
              }}
              {...nftData}
              type="BORROWED"
            />
          ))}
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className={s.nftList}>
          {nftlent.map((nftData, i) => (
            <NFTCard
              key={`nft-wallet-${i}`}
              openLendModal={() => {
                return null
              }}
              {...nftData}
              type="LENT"
            />
          ))}
        </div>
      </TabPanel>
    </div>
  )
}

export default Account
