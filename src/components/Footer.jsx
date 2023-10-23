import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="bg-dark-subtle">
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-3">
                        <h4>Senac</h4>
                        <p>2023 - Todos os direitos reservados</p>
                    </div>
                    <div className="col-md-3">
                        <h4>Características</h4>
                        <ul className="list-group">
                            <li className="list-group-item"><Link to="/cursos">Cursos</Link></li>
                            <li className="list-group-item"><Link to="/sobre">Instituição</Link></li>
                        </ul>
                    </div>
                    <div className="col-md-3">Coluna 3</div>
                    <div className="col-md-3">Coluna 4</div>
                </div>
            </div>
        </footer>
    )
}