import { useEffect } from "react";
import { useNavigate } from "react-router";
import "./NotFound.css";

export default function NotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="not-found-container">
      <h1>404 - Page non trouvée</h1>
      <p>Vous allez être redirigé vers la page d'accueil.</p>
    </div>
  );
}