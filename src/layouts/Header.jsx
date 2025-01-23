import { useLocation } from "react-router";
import Nav from "../components/Nav/Nav";
import "./Header.css";

export default function Header() {
  const location = useLocation();

  const pageName = location.pathname.split("/").pop();
  const displayName = pageName ? pageName : "Accueil";

  return (
    <div className="header">
      <Nav displayName={displayName} />
    </div>
  );
}