import React from "react";
import { NavLink } from "react-router-dom";
const AdminHeader = () => {
  return (
    <header>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a className="navbar-brand" href="!#">
          Navbar
        </a>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-toggle="collapse"
          data-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <NavLink
                exact
                to={"/admin/dashboard"}
                className="nav-link"
                activeClassName={"active"}
              >
                Dashboard
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to={"/admin/mesas"}
                className="nav-link"
                activeClassName={"active"}
              >
                Mesas
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to={"/admin/categorias"}
                className="nav-link"
                activeClassName={"active"}
              >
                Categorias
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to={"/admin/platos"}
                className="nav-link"
                activeClassName={"active"}
              >
                Platos
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                exact
                to={"/admin/pedidos"}
                className="nav-link"
                activeClassName={"active"}
              >
                Pedidos
              </NavLink>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="text"
              placeholder="Search"
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
};

export default AdminHeader;
