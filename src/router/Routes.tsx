import { Routes as OriginalRoutes, Route } from "react-router-dom"
import { Home } from "../components"

export const Routes = () => {
  return (
    <OriginalRoutes>
      <Route path="/" index element={<Home />} />
    </OriginalRoutes>
  )
}
