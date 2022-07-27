import Navbar from "./Components/Navbar"
import Products from "./Pages/Products"
import Home from "./Pages/Home"
import Contact from "./Pages/Contact"
import Footer from "./Components/Footer"
import { Route, Routes, BrowserRouter} from "react-router-dom"
import React from "react"

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
        <Footer />
        </BrowserRouter>
        
    </>
  )
}

export default App;
