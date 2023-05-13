import { useState } from "react"

import { Box, Tab, Tabs } from "@mui/material"
import { CurrentlyAvailableBorrowList } from "../CurrentlyAvailableBorrowList"
import { colors } from "../../constants"
import { useQuery } from "@apollo/client"
import { GET_EVENTS_DOCUMENT } from "../../graphql"

import { catalogue } from "../../mock"

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
      <CurrentlyAvailableBorrowList />
    </>
  )
}

export default Home
