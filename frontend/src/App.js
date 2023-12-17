import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/Home";
import "leaflet/dist/leaflet.css";
import NavigationBar from "./components/NavigationBar";
import DisplayHostelList from "./components/DisplayHostelList";


function App() {
  return (
    <>
      <div className="wrapper">
        <NavigationBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/displayHostelList" element={<DisplayHostelList />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
