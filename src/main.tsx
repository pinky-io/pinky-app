// @ts-ignore
import React from "react";
// @ts-ignore
import ReactDOM from "react-dom/client";
import App from "./App";
import { RouterWrapper } from "./router/RouterWrapper";
import { RainbowKitWrapper } from "./wallet";
import "/fonts/PPNeueBit-Bold.otf";
import "./index.css";
import { ApolloWrapper } from "./graphql";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterWrapper>
      <RainbowKitWrapper>
        <ApolloWrapper>
          <App />
        </ApolloWrapper>
      </RainbowKitWrapper>
    </RouterWrapper>
  </React.StrictMode>
);
