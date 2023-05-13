// @ts-ignore
import React from "react"
import { Link } from "react-router-dom"
import { Profil } from "../Icons"
import { ConnectButton } from "@rainbow-me/rainbowkit"
import { useAccount } from "wagmi"
import s from "./Header.module.css"

const Header = () => {
  const { isConnected } = useAccount()
  return (
    <header className={s.container}>
      <Link className={s.logo} to="/">
        Pinky
      </Link>
      <div className={s.rightContainer}>
        <div className={s.connectButton}>
          <ConnectButton />
        </div>
        {isConnected ? (
          <Link className={s.profilContainer} to="/account">
            <div className={s.profil}>
              <Profil />
            </div>
          </Link>
        ) : null}
      </div>
    </header>
  )
}

export default Header
