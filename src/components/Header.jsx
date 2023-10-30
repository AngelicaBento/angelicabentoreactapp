import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <div class="">
            <img src="https://i.postimg.cc/HL4PkLPF/Logo.png" alt="" />
          </div>

          <div
            className="collapse navbar-collapse ms-md-auto justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Página Inicial
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/sobre" className="nav-link">
                  Sobre
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/dicas" className="nav-link">
                  Dicas
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/trips" className="nav-link">
                  Trips ♥
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/contato" className="nav-link">
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
