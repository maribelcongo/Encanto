// src/App.jsx
import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./assets/pages/Register";
import Login from "./assets/pages/Login";
import Cart from "./assets/pages/Cart";
import Home from "./assets/pages/Home"; // asegúrate de que el path esté bien

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/registro" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/carrito" element={<Cart />} />
    </Routes>
  );
}

export default App;
