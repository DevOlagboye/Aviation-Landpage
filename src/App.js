import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
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
import Passengers from "./Components/Passengers/Passengers";
import Schedule from "./Components/Schedule/Schedule";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
  return (
    <div>
      <Router>
        <Routes>
          <Route
            path="/"
            element={
              <div>
                {loading ? <div>
                  <ClipLoader
        loading={loading}
        size={30}
        color={"#123abc"}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
                </div> : <div>
                <HeroPage />
                <Features />
                <Cta />
                <BookFlight />
                <BestTravelers />
                <Testimonials />
                <Memories />
                <Newsletter />
                <Footer />
                  </div>}
              </div>
            }
          />
          <Route path="/success" element={<SuccessPage />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/passengers" element={<Passengers />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
