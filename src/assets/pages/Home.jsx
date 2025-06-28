// src/pages/Home.jsx
// src/assets/pages/Home.jsx (ajusta si está en otra carpeta)
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <div className="auth-buttons">
        <button onClick={() => navigate("/login")}>Iniciar Sesión</button>
        <button onClick={() => navigate("/registro")}>Registrarse</button>
      </div>

      <nav className="navbar">
        <div className="logo" onClick={() => navigate("/")}>
          🦋 MiTienda
        </div>
        <button className="cart-button" onClick={() => navigate("/carrito")}>
          🛒 Carrito
        </button>
      </nav>
    </div>
  );
};

export default Home;
