import { ConnectButton } from "@rainbow-me/rainbowkit";
import { Outlet } from "react-router-dom";

export const Layout = ({}) => {
  return (
    <>
      <header>
        <ConnectButton />
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
};
