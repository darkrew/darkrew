
import './App.css'
import ContactIcons from './components/Contact/ContactIcons'
import ContactUs from './components/Contact/ContactUs'
import Footer from './components/Footer'
import Home from './components/Home'
import Navbar from './components/Navbar'
import OurServices from './components/OurServices/OurServices'
import WhyCooseUs from './components/WhyCooseUs/WhyCooseUs'

function App() {

  return (
    <>
    <div className="Main bg-[var(--background-color)] h-[100%] max-w-full">
      <Home/>
      <OurServices/>
      <WhyCooseUs/>
      <ContactUs/>
      <ContactIcons/>
      <Footer/>
    </div>
    </>
  )
}

export default App
