import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Login } from "./pages/Login";
import { Product } from "./pages/Product";
import { Register } from "./pages/Register/";


export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
      <Route path="/product/:id" element={<Product/>}/>
    </Routes>
  )
}