import { Routes, Route, Navigate } from "react-router-dom";
import Register from "./assets/pages/Register";
import Cart from "./assets/pages/Cart";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/registro" />} />
      <Route path="/registro" element={<Register />} />
      <Route path="/carrito" element={<Cart />} />
    </Routes>
  );
}

export default App;
