
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import "./Components/component.css"
import Menpage from "./Components/MenPage"
import Women from "./Components/WomenPage"
import Kid from "./Components/KidOPage";
function App() {


  return (
    <>
 

    <BrowserRouter>
     <NavBar></NavBar>
    <Routes>
     
      <Route path="/"  element={<Menpage/>} />
      <Route path="/women" element={<Women/>} />
      <Route path="/kids" element={<Kid/>} />
     
    </Routes>
     <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App
