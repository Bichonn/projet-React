import { useAuth } from "./AuthProvider";
import { useState } from "react";
import "./LoginOut.css";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Veuillez vous connecter</h2>
      <input
        type="text"
        placeholder="Nom d'utilisateur"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Mot de passe"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="login__btn" type="submit">Se connecter</button>
    </form>
  );
}

function Logout() {
  const { logout } = useAuth();

  return <button onClick={logout}>Se déconnecter</button>;
}

export { Login, Logout };
