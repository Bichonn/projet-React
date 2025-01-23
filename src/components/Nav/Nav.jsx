import { useNavigate, Link } from "react-router";
import "./Nav.css";

export default function Nav({ displayName }) {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    };

    return (
        <nav className="nav">
            <Link to="/"><img className="nav__logo" src="album-logo.png" alt="Logo Album" /></Link>
            <h1 className="nav__title">{displayName}</h1>
            <ul className="nav__menu">
                <li><Link to="/artists">Artistes</Link></li>
                <li><Link to="/contact">Contactez-nous</Link></li>
            </ul>
        </nav>
    );
}