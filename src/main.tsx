import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { RouterWrapper } from "./router/RouterWrapper.tsx";
import { RainbowKitWrapper } from "./wallet/index.tsx";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterWrapper>
      <RainbowKitWrapper>
        <App />
      </RainbowKitWrapper>
    </RouterWrapper>
  </React.StrictMode>
);
