import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__content">
        <hr />
        <p>&copy; Ceci est un chef kebabiste chauve dans un footer</p>
        <nav className="footer__nav">
          <a href="#" className="footer__link">À propos</a>
          <a href="#" className="footer__link">Contact</a>
          <a href="#" className="footer__link">Politique de confidentialité</a>
        </nav>
      </div>
    </footer>
  );
}