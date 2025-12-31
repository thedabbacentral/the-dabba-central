import "./App.scss";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.jsx";
import CorporatePlans from "./pages/CorporatePlans/CorporatePlans.jsx";
import Plans from "./pages/Plans/Plans.jsx";
import Menu from "./pages/Menu/Menu.jsx";
import Contact from "./pages/Contact/Contact.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/our-plans" element={<Plans />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/corporate-plans" element={<CorporatePlans />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
