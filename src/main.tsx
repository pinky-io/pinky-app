import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"
import { RouterWrapper } from "./router/RouterWrapper"
import { RainbowKitWrapper } from "./wallet"

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterWrapper>
      <RainbowKitWrapper>
        <App />
      </RainbowKitWrapper>
    </RouterWrapper>
  </React.StrictMode>
)
