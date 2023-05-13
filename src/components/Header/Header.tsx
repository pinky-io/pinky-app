import React from "react"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import s from "./Header.module.css"

const Header = () => {
  return (
    <header className={s.container}>
      <p className={s.logo}>Pinky</p>
      <ConnectButton />
    </header>
  )
}

export default Header
