import { Link, NavLink } from "react-router-dom";
import { MessageCircle } from "lucide-react";

function Navbar() {
  return (
    <header className="navbar">

      <div className="container navbar-content">

        <Link
          to="/"
          className="navbar-logo"
        >
          <strong>HUB</strong>
          <span>-IT</span>
        </Link>


        <nav className="navbar-menu">

          <NavLink to="/">
            Inicio
          </NavLink>

          <NavLink to="/productos">
            Productos
          </NavLink>

          <NavLink to="/servicio-tecnico">
            Servicio Técnico
          </NavLink>

        </nav>


        <a
          href="https://wa.me/51964097821"
          target="_blank"
          rel="noreferrer"
          className="navbar-whatsapp"
        >

          <MessageCircle size={18} />

          WhatsApp

        </a>

      </div>

    </header>
  );
}

export default Navbar;