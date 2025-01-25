import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Lp from "./Lp.jsx";
import Sign from "./Sign.jsx";
import Sub from "./Sub.jsx";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Lp />} />
        <Route path="Sub/:ti" element={<Sub />} />
        <Route path="sig" element={<Sign />} />
      </Routes>
    </BrowserRouter>
  );
}
