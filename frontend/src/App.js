import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";


import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./components/HomePage";
import "leaflet/dist/leaflet.css";
import NavigationBar from "./components/NavigationBar";
import BookingPage from "./components/BookingPage";

function App() {
  return (
    <>
      <div className="wrapper">
        <NavigationBar />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/booking" element={<BookingPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </>
  );
}
export default App;
