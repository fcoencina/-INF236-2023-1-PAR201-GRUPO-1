import React from "react";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";

// Here, we display our Navbar
export default function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{position:"fixed", top: 0, left: 0, width: "100%"}}>
        <NavLink className="navbar-brand" to="/" style={{ display: "flex", alignItems: "center", padding: 10 }}>
          <img style={{ "width": 8 + '%', marginRight: 10 }} src="https://cdn.pixabay.com/photo/2016/01/12/23/21/paramedic-1136916_1280.png" alt=""></img>
          <h1 style={{ "text-align": +"center" }}>S.A.P.U.</h1>
        </NavLink>

        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="#">
                Triage
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="#">
                Anamnesis
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/search">
                Buscar Paciente
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/createP">
                Ingresar Paciente
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}