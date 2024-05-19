import "./App.css";
import ContactIcons from "./components/Contact/ContactIcons";
import ContactUs from "./components/Contact/ContactUs";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import OurServices from "./components/OurServices/OurServices";
import Team from "./components/Team/Team";
import TeamCards from "./components/Team/TeamCards";
import WhyCooseUs from "./components/WhyCooseUs/WhyCooseUs";

function App() {
  return (
    <>
      <div className="Main bg-[var(--background-color)] h-[100%] max-w-full">
        <Home />
        <OurServices />
        <Team />
        <ContactUs />
        <ContactIcons />
        <Footer />
      </div>
    </>
  );
}

export default App;
