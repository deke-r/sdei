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
      <Route path="/" element={< Home/>} />
      <Route path="/about" element={< About/>} />
      <Route path="/services" element={< Services/>} />
      <Route path="/contact" element={< ContactUs/>} />
    </Routes>
    <FooterSection/>
  </BrowserRouter>
    
    
    </>
  )
}

export default App