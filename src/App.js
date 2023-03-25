import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import HeroPage from "./Components/HeroPage/HeroPage";
import Features from "./Components/Features/Features";
import Cta from "./Components/Cta/Cta";
import BookFlight from "./Components/BookFlight/BookFlight";
import BestTravelers from "./Components/BestTravelers/BestTravelers";
import Testimonials from "./Components/Testimonials/Testimonials";
import Memories from "./Components/Memories/Memories";
import Newsletter from "./Components/Newsletter/Newsletter";
import Footer from "./Components/Footer/Footer";
import SuccessPage from "./Components/SuccessPage/SuccessPage";
import Passengers from "./Components/Passengers/Passengers"
import Schedule from "./Components/Schedule/Schedule";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={
          <div>
            <HeroPage />
            <Features />
            <Cta />
            <BookFlight />
            <BestTravelers />
            <Testimonials />
            <Memories />
            <Newsletter />
            <Footer />
          </div>
          } />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/schedule" element={<Passengers/>} />
          <Route path="/passengers" element={<Schedule/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
