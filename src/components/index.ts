import styled from "@emotion/styled"
import { Box, Typography } from "@mui/material"

export { default as Home } from "./Home/Home"
export { default as Header } from "./Header/Header"
export { default as Account } from "./Account/Account"
export * from "./Rent"

export const Content = styled(Box)`
  border: 1px solid rgba(233, 69, 96, 0.4);
  border-radius: 5px;
`

export const Row = styled(Box)`
  display: flex;
  justify-content: space-between;
`

export const Column = styled(Box)`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`

export const DurationSpan = styled.span`
  font-size: 0.75rem;
`

export const Price = styled(Typography)`
  font-size: 2.125rem;
`

export const Image = styled.img`
  display: block;
  width: 100%;
  border-radius: 5px 5px 0 0;
`

export const SubContent = styled.div`
  padding: 1rem;
`

export const Subtitle = styled.span`
  color: rgba(255, 255, 255, 0.6);
  font-size: 0.75rem;
`
