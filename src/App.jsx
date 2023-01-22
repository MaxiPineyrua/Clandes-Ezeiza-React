import { Children, useState } from "react"
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { ItemListContainer } from "./components/container/ItemListContainer/ItemListContainer"
import ItemDetailContainer from "./components/container/ItemDetailContainer/ItemDetailContainer"
import CartContainer from "./components/container/CartContainer/CartContainer"
import NavBar from "./components/NavBar/NavBar"
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
   <BrowserRouter>
      <NavBar/>
      <Routes>
         <Route path="/" element={<ItemListContainer saludo={"En contrucción.."} />} />
         <Route path="/categoria/:categoryId" element={<ItemListContainer saludo={"En contrucción..."} />} />
         <Route path="/detail/:detailId" element={<ItemDetailContainer />} />
         <Route path="/cart" element={<CartContainer />} />
         <Route path="*" element={<Navigate to="/"/>} /> 
        </Routes>
    </BrowserRouter>
  )
}

export default App