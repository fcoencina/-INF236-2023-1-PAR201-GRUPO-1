
import React, { useState} from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';
import { Link } from "react-router-dom";
import MyPDF from './pdf';

const Record = (props) => (
  <tr>
    <td>{props.record.name}</td>
    <td>{props.record.rut}</td>
    <td>{props.record.f_nacimiento}</td>
    <td>{props.record.sexo}</td>
    <td>{props.record.direccion}</td>
    <td>{props.record.comuna}</td>
    <td>{props.record.movil}</td>
    <td>{props.record.prevision}</td>
    <td>
      <Link className="btn btn-link" to={`/edit/${props.record._id}`}>Editar</Link>
      <Link className="btn btn-link" onClick={() => handleOpenPDF(props.record)}>Ver ficha</Link>
      {/*<button className="btn btn-link"
        onClick={() => {
          props.deletePacient(props.record._id);
        }}
      >Borrar</button>*/}
    </td>
  </tr>
);

const handleOpenPDF = (pacient) => {
  const win = window.open('', '_blank');
  win.document.write('<html><body><div id="pdf-container"></div></body></html>');

  ReactDOM.render(<MyPDF formData={pacient} />, win.document.getElementById('pdf-container'));
};

function Search() {
  const [busqueda, setBusqueda] = useState("");
  const [getBusqueda, setgetBusqueda] = useState([]);

  function recordList() {
    return getBusqueda.map((pacient) => {
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

    const newPacients = getBusqueda.filter((el) => el._id !== id);
    setgetBusqueda(newPacients);
  }
  */

  async function search(value) {
    setBusqueda(value);

    try {
      if (value.trim() === '') {
        // La cadena de búsqueda está vacía, no se realiza la solicitud
        return;
      }
      const res = await Axios.get(`http://localhost:5000/search/${value}`);
      setgetBusqueda(res.data);
    }
    catch (error) {
      // Manejar el error
      console.error('Error:', error.message);
    }
  }

  return (
    <div style={{ marginTop: "150px", marginRight: "20px", marginLeft: "20px" }}>
      <form class="d-flex">
        <input
          className="form-control me-sm-2"
          type="search"
          placeholder="Buscar Paciente"
          value={busqueda}
          onChange={(e) => search(e.target.value)}
        />
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Buscar</button>
      </form>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>R.U.T</th>
            <th>Fecha de nacimiento</th>
            <th>Sexo</th>
            <th>Dirección</th>
            <th>Comuna</th>
            <th>Móvil</th>
            <th>Previsión</th>
          </tr>
        </thead>
        <tbody>{recordList()}</tbody>
      </table>
    </div>
  );
}

export default Search;