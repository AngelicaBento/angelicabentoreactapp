import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-dark-subtle">
      <div className="container">
        <div className="row py-5">
          <div className="col-md-3">
            <h4>Sem Rota Definida</h4>
            <p>2023 - Todos os direitos reservados</p>
          </div>
          <div className="col-md-3">
            <h4>Trips ♥</h4>
            <ul className="list-group">
              <li className="list-group-item">
                <Link to="/trips">Porto Alegre/RS</Link>
              </li>
              <li className="list-group-item">
                <Link to="/trips">Florianópolis/SC</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">
            <h4>Dicas para montar sua trip</h4>
            <ul className="list-group">
              <li className="list-group-item">
                <Link to="/dicas">LINK 1</Link>
              </li>
              <li className="list-group-item">
                <Link to="/dicas">LINK 2</Link>
              </li>
            </ul>
          </div>
          <div className="col-md-3">Coluna 4</div>
        </div>
      </div>
    </footer>
  );
}
