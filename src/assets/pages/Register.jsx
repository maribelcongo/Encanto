import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, googleProvider } from "../../../firebase";
import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import ButterflySpinner from "../../components/ButterflySpinner"; // ajusta el path si es necesario
import "./register.css";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      navigate("/carrito");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleGoogle = async () => {
    setLoading(true);
    try {
      await signInWithPopup(auth, googleProvider);
      navigate("/carrito");
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <ButterflySpinner />;

  return (
    <div className="register-container">
      <h2>Registro</h2>
      <form onSubmit={handleRegister}>
        <input
          type="email"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Contraseña"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Registrarse</button>
      </form>

      <hr />

      <button onClick={handleGoogle}>Registrarse con Google</button>
    </div>
  );
};

export default Register;
