import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import "./Components/component.css"
import Menpage from './pages/MenPage';
import Women from './pages/WomenPage';
import Kid from "./Components/KidOPage";
import Cart from "./pages/CartPage";
import ProductDetails from './pages/ProductDetails';
function App() {


  return (
    <>
 
    < ToastContainer/>
    <BrowserRouter>
     <NavBar></NavBar>
    <Routes>
     
      <Route path="/"  element={<Menpage/>} />
      <Route path="/women" element={<Women/>} />
      <Route path="/kids" element={<Kid/>} />
      <Route path="/cart" element={<Cart/>} />
       <Route path="/productDetails" element={<ProductDetails/>} />

     
    </Routes>
     <Footer></Footer>
    </BrowserRouter>
    </>
  )
}

export default App
