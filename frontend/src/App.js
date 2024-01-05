import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/HomePage";
import "leaflet/dist/leaflet.css";
import NavScroll from "./components/NavigationBar";
import SummaryPage from "./components/SummaryPage";

function App() {
  return (
    <>
      <div className="wrapper">
        <NavScroll/>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/summary" element={<SummaryPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
