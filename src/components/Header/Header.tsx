import React from "react"
import { Profil } from "../Icons"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useAccount } from "wagmi"
import s from "./Header.module.css"

const Header = () => {
  const { isConnected } = useAccount()
  return (
    <header className={s.container}>
      <a className={s.logo} href="/">
        Pinky
      </a>
      <div className={s.rightContainer}>
        <div className={s.connectButton}>
          <ConnectButton />
        </div>
        {isConnected ? (
          <a className={s.profilContainer} href="/account">
            <div className={s.profil}>
              <Profil />
            </div>
          </a>
        ) : null}
      </div>
    </header>
  )
}

export default Header
