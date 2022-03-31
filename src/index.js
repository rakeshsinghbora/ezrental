import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import About from './Components/About/About';
import Contact from "./Components/ContactUs/Contact";
import Footer from "./Components/Footer/Footer";
import Suv from "./Components/VehiclesFleet/SelectedVehiclesGroup/Suv";
import Premium from "./Components/VehiclesFleet/SelectedVehiclesGroup/Premium";
import Luxury from "./Components/VehiclesFleet/SelectedVehiclesGroup/Luxury";
import Sports from "./Components/VehiclesFleet/SelectedVehiclesGroup/Sports";
import Supercar from "./Components/VehiclesFleet/SelectedVehiclesGroup/Supercar";
import ScrollToTop from "./ScrollToTop ";


ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route exact path="about" element={<About />} />
        <Route exact path="contactus" element={<Contact />} />
        <Route exact path="SUV" element={<Suv />} />
        <Route exact path="Sports" element={<Luxury />} />
        <Route exact path="SuperCars" element={<Premium />} />
        <Route exact path="Luxury" element={<Sports />} />
        <Route exact path="Premium" element={<Supercar />} />

      </Routes>
      <Footer />
    </ScrollToTop>
  </BrowserRouter>
  , document.getElementById('root')
);
