import React, { useContext } from 'react'
import { withRouter } from "react-router-dom";
import AuthContext from '../../../context/auth/authContext';

const ClienteHeader = ({ history }) => {
  const { autenticado, username, cerrarSesion, cargando } = useContext(AuthContext);

  const goLogin = () => history.push("/auth/login");

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-danger">
      <a className="navbar-brand" href="#">Navbar</a>
      <button className="navbar-toggler d-lg-none" type="button" data-toggle="collapse" data-target="#collapsibleNavId" aria-controls="collapsibleNavId"
        aria-expanded="false" aria-label="Toggle navigation"></button>
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Link</a>
          </li>
        </ul>
        {
          cargando ?
            <span className="text-white my-2">
              <strong> Cargando...</strong>
            </span> :

            autenticado ?
              <>
                <p className="text-white my-2 mr-2">
                  <strong>{username}</strong>
                </p>
                <button className="btn btn-success my-2 mr-2" onClick={() => {
                  cerrarSesion();
                  goLogin();
                }}>
                  Cerrar Sesión
              </button>
              </> :
              <button className="btn btn-warning my-2 mr-2"
                onClick={() => {
                  goLogin();
                }}>Iniciar Sesión</button>
        }
        <form className="form-inline my-2 my-lg-0">
          <input className="form-control mr-sm-2" type="text" placeholder="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>
  )
}

export default withRouter(ClienteHeader)
