import { BrowserRouter, Routes, Route } from "react-router";
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
 <ScrollToTop/>
 <Routes>
  <Route path="/" element={<Home />} />
  <Route 
    path="/about-sdei-commercial-scrap-dealers-demolition-experts-delhi-ncr-all-over-india" 
    element={<About />} 
  />
  <Route 
    path="/services-building-demolition-industrial-scrap-dealing-facility-decommissioning-delhi-ncr-all-over-india" 
    element={<Services />} 
  />
  <Route 
    path="/contact-top-demolition-scrap-dealers-decommissioning-company-delhi-ncr-all-over-india" 
    element={<ContactUs />} 
  />
</Routes>

    <FooterSection/>
  </BrowserRouter>
    
    
    </>
  )
}

export default App