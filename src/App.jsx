import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import Contact from "./assets/Pages/Contact"
import Home from "./assets/Pages/Home"
import Shop from "./assets/Pages/Shop"
import Navber from "./assets/cmp/Navber/navber"
import NotFound from "./assets/Pages/NotFound";
import ProductPage from "./assets/cmp/ProductPage/ProductPage";


function App() {


  return (
    <>
      <BrowserRouter>
      <Navber />
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/shop/:id" element={<ProductPage />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path= "*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
