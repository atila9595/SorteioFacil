import { Link } from "react-router-dom";

export default function NavBar() {

    return (
        <>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        
                        <div className="navbar-brand" ><Link to="/">Numero</Link></div>
                        <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <div className="nav-link active" aria-current="page" ><Link to="/informacao">Informação</Link></div>
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link" ><Link to="/contato">Informação</Link></div>
                                </li>
                                <li className="nav-item">
                                    <div className="nav-link disabled" tabIndex="-1" aria-disabled="true">Disabled</div>
                                </li>
                            </ul>

                        </div>
                    </div>
                </nav>
            </div>
        </>
    )    

}