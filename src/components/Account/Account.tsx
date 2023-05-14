import { useState } from "react"

import { Box, Tab, Tabs } from "@mui/material";
import { colors } from "../../constants";
import s from "./Account.module.css";
import { NFTList } from "../NFTList";
import { LendModal } from "../LendModal";
import { NFTData } from "../NFTCard";
import { useGetNFtsOfWallet } from "../../hooks";
import { useAccount } from "wagmi";
import { useBorrowedNFTs } from "../../hooks/useBorrowedNFTs";
import { useGetLendByOwner } from "../../hooks/useGetLendByOwner";

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
  const { address } = useAccount()
  const { nfts } = useGetNFtsOfWallet(address)

  const [activeNft, setActiveNft] = useState<NFTData | null>(null);
  const [lendModalOpen, setlendModalOpen] = useState(false);
  const [value, setValue] = useState(0);
  const { data, eventsLoading } = useBorrowedNFTs(address || "");
  const { data: lendByOwnerData } = useGetLendByOwner(address || "");

  const handleLendModalOpen = (nft: NFTData) => {
    setActiveNft(nft)
    setlendModalOpen(true)
  }

  const handleLendModalClose = () => {
    setActiveNft(null)
    setlendModalOpen(false)
  }

  const handleChange = (_: React.SyntheticEvent, newValue: number) => {
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
        <NFTList
          nfts={nfts.map((nft) => ({
            collection: {
              address: nft.contract.address,
              name: nft.contract.name || "",
            },
            currency: "ETH",
            lendDuration: 1,
            lendPrice: 0.1,
            tokenId: nft.tokenId,
            type: "MYWALLET",
            url: nft.rawMetadata?.image,
          }))}
          openLendModal={handleLendModalOpen}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <NFTList
          nfts={(data?.rents || []).map((rent: any) => ({
            collection: {
              address: rent.collectionAddress,
              name: "name",
            },
            tokenId: rent.tokenID,
            type: "BORROWED",
          }))}
          openLendModal={handleLendModalOpen}
        />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <NFTList
          nfts={(lendByOwnerData?.lends || []).map((lend: any) => ({
            collection: {
              address: lend.collectionAddress,
              name: "name",
            },
            tokenId: lend.tokenID,
            type: "LENT",
          }))}
          openLendModal={handleLendModalOpen}
        />
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
