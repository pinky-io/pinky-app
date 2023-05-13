import "@rainbow-me/rainbowkit/styles.css"

import {
  RainbowKitProvider,
  getDefaultWallets,
  darkTheme,
  Theme,
} from "@rainbow-me/rainbowkit"
// @ts-ignore
import merge from "lodash.merge"
import { WagmiConfig, configureChains, createConfig } from "wagmi"
import { goerli, polygonMumbai } from "wagmi/chains"
import { publicProvider } from "wagmi/providers/public"

type RainbowKitWrapperProps = {
  children: React.ReactNode
}

const { chains, publicClient } = configureChains(
  [goerli, polygonMumbai],
  [publicProvider()]
)

const { connectors } = getDefaultWallets({
  appName: "PinkyApp",
  projectId: "pinkyapp",
  chains,
})

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
})

const myTheme = merge(darkTheme(), {
  colors: {
    accentColor: "#E94560 ",
  },
  fonts: {
    body: "roboto",
  },
} as Theme)

export const RainbowKitWrapper = ({ children }: RainbowKitWrapperProps) => {
  return (
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider chains={chains} theme={myTheme}>
        {children}
      </RainbowKitProvider>
    </WagmiConfig>
  )
}
