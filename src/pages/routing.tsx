import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./home";
import { Creation } from "./creation";

export const Routing: FC = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/creation" element={<Creation />} />
  </Routes>
);
