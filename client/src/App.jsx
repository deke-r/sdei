import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; // updated to correct import path
import Home from "./pages/Home";
import About from "./pages/About";
import FooterSection from "./components/FooterSection";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import ScrollToTop from "./ScrollToTop";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          
          {/* About Page */}
          <Route 
            path="/about" 
            element={<Navigate to="/about-sdei-commercial-scrap-dealers-demolition-experts-delhi-ncr-all-over-india" replace />} 
          />
          <Route 
            path="/about/" 
            element={<Navigate to="/about-sdei-commercial-scrap-dealers-demolition-experts-delhi-ncr-all-over-india" replace />} 
          />
          <Route 
            path="/about-sdei-commercial-scrap-dealers-demolition-experts-delhi-ncr-all-over-india" 
            element={<About />} 
          />

          {/* Services Page */}
          <Route 
            path="/services" 
            element={<Navigate to="/services-building-demolition-industrial-scrap-dealing-facility-decommissioning-delhi-ncr-all-over-india" replace />} 
          />
          <Route 
            path="/services/" 
            element={<Navigate to="/services-building-demolition-industrial-scrap-dealing-facility-decommissioning-delhi-ncr-all-over-india" replace />} 
          />
          <Route 
            path="/services-building-demolition-industrial-scrap-dealing-facility-decommissioning-delhi-ncr-all-over-india" 
            element={<Services />} 
          />

          {/* Contact Page */}
          <Route 
            path="/contact" 
            element={<Navigate to="/contact-top-demolition-scrap-dealers-decommissioning-company-delhi-ncr-all-over-india" replace />} 
          />
          <Route 
            path="/contact/" 
            element={<Navigate to="/contact-top-demolition-scrap-dealers-decommissioning-company-delhi-ncr-all-over-india" replace />} 
          />
          <Route 
            path="/contact-top-demolition-scrap-dealers-decommissioning-company-delhi-ncr-all-over-india" 
            element={<ContactUs />} 
          />
        </Routes>
        <FooterSection />
      </BrowserRouter>
    </>
  );
}

export default App;
