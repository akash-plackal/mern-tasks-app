import React from "react";
import { Route, Routes } from "react-router-dom";

import Home from "./components/sections/Home";
import Work from "./components/sections/Work";
import Personal from "./components/sections/Personal";
import Goals from "./components/sections/Goals";
import Life from "./components/sections/Life";
import { GlobalProvider } from "./context/GlobalState";

export default function App() {
  return (
    <GlobalProvider>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/work" element={<Work />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/goals" element={<Goals />} />
        <Route path="/life" element={<Life />} />
      </Routes>
    </GlobalProvider>
  );
}
