import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import About from './Components/About/About';
import Contact from "./Components/ContactUs/Contact";
import Footer from "./Components/Footer/Footer";


ReactDOM.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route exact path="/" element={<App />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/contactus" element={<Contact />} />
    </Routes>
    <Footer/>
  </BrowserRouter>
  , document.getElementById('root')
);
