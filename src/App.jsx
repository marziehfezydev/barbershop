import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./pages/ScrollToTop";
import Navbar from "./pages/Navbar";
import Footer from "./pages/Footer";
import MainHome from "./pages/MainHome";
import AboutUs from "./pages/AboutUs";
import Services from "./pages/Services";
import OurBarber from "./pages/OurBarber";
import Testimonial from "./pages/Testimonial";
import Appointment from "./pages/Appointment";

function App() {
  return (
    <>
      <ScrollToTop />
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <MainHome />
              <AboutUs />
              <Services />
              <OurBarber />
              <Testimonial />
            </>
          }
        />

        <Route path="/appointment" element={<Appointment />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
