import Navbar from "./pages/Navbar"
import MainHome from "./pages/MainHome"
import AboutUs from "./pages/AboutUs"
import Services from "./pages/Services"
import OurBarber from "./pages/OurBarber"
import "./index.css"


function App() {
  return (
    <>
      {/* navbar }*/}
      <Navbar />

      {/* home hair cut */}
      <MainHome />

      {/* about us */}
      <AboutUs />

      { /* Services*/}
      <Services />

      { /*Our Barber */}
      <OurBarber />






    </>
  )
}



export default App
