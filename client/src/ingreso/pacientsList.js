
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from "react-router-dom";
//Para que funcione el dropdown
import "bootstrap/dist/js/bootstrap.bundle.min.js";

const Record = (props) => (
  <tr>
    <td>{props.record.name}</td>
    <td>{props.record.rut}</td>
    <td>{props.record.f_nacimiento}</td>
    <td>{props.record.sexo}</td>
    <td>{props.record.movil}</td>
    {/*<td>{props.record.direccion}</td>
      <td>{props.record.comuna}</td>
<td>{props.record.prevision}</td>*/}
    <td>
      <div class="btn-group" role="group">
        <button type="button" class="btn btn-primary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
          Acción
        </button>
        <ul class="dropdown-menu">
          <Link className="dropdown-item" to={`/editP/${props.record._id}`}>Editar info</Link>
          <Link className="dropdown-item" to={`/editT/${props.record._id}`}>Triage</Link>
          <Link className="dropdown-item" to={`/editA/${props.record._id}`}>Anamnesis</Link>
        </ul>
      </div>
      {/*<button className="btn btn-link"
          onClick={() => {
            props.deletePacient(props.record._id);
          }}
        >Borrar</button>*/}
    </td>
  </tr>
);

const PacientList = () => {
  const [pacients, setPacients] = useState([]);

  const getUsers = async () => {
    const res = await Axios.get("http://localhost:5000/pacient");
    setPacients(res.data);
  };

  useEffect(() => {
    getUsers();
  }, []);

  function recordList() {
    return pacients.map((pacient) => {
      return (
        <Record
          record={pacient}
          //deletePacient={() => deletePacient(pacient._id)}
          key={pacient._id}
        />
      );
    });
  }
  /*
  async function deletePacient(id) {
    await Axios.delete(`http://localhost:5000/delete/${id}`);

    const newPacients = pacients.filter((el) => el._id !== id);
    setPacients(newPacients);
  }*/

  return (
    <div style={{ marginTop: "110px", marginRight: "20px", marginLeft: "20px" }}>
      <br></br>
      <br></br>
      <h3>Pacientes recientes</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>R.U.T</th>
            <th>Fecha de nacimiento</th>
            <th>Sexo</th>
            <th>Móvil</th>
            {/*<th>Dirección</th>
            <th>Comuna</th>
  <th>Previsión</th>*/}
          </tr>
        </thead>
        <tbody>{recordList()}</tbody>
      </table>
    </div>
  );
};

export default PacientList;