import { Route, Routes } from "react-router-dom"
import { Home } from "./home"
import { Creation } from "./creation/Creation"

export function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/creation" element={<Creation />} />
    </Routes>
  )
}
