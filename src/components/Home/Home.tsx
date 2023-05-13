import { useState } from "react"

import { Box, Tab, Tabs } from "@mui/material"
import { CurrentlyAvailableBorrowList } from "../CurrentlyAvailableBorrowList"
import { colors } from "../../constants"
import { useQuery } from "@apollo/client"
import { GET_EVENTS_DOCUMENT } from "../../graphql"

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

const Home = () => {
  const [value, setValue] = useState(0)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue)
  }

  const { data } = useQuery(GET_EVENTS_DOCUMENT)

  console.log({ data })

  return (
    <>
      <h1>Catalogue</h1>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        indicatorColor="secondary"
      >
        <Tab
          label="Available to Borrow"
          {...a11yProps(0)}
          style={{ color: value === 0 ? colors.SECONDARY : colors.FONT }}
        />
        <Tab
          label="Borrowed"
          {...a11yProps(1)}
          style={{ color: value === 1 ? colors.SECONDARY : colors.FONT }}
        />
        <Tab
          label="My NFTs"
          {...a11yProps(2)}
          style={{
            color: value === 2 ? colors.SECONDARY : colors.FONT,
          }}
        />
      </Tabs>

      <TabPanel value={value} index={0}>
        <CurrentlyAvailableBorrowList />1
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CurrentlyAvailableBorrowList />2
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CurrentlyAvailableBorrowList />3
      </TabPanel>
    </>
  )
}

export default Home
