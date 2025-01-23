import { Logout } from "../../auth/LoginOut";
import "./Home.css";

export default function Home() {
    return (
        <div className="home-container">
            <h1>Bienvenue sur la page d'accueil</h1>
            <Logout />
        </div>
    );
}