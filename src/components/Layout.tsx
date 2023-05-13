import { Outlet } from "react-router-dom"
import { Header } from "./"

export const Layout = ({}) => {
  return (
    <div className="layout">
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </div>
  )
}
