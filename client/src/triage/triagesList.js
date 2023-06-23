
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { Link } from "react-router-dom";

const Record = (props) => (
    <tr>
      <td>{props.record.paciente}</td>
      <td>{props.record.remitido_por}</td>
      <td>
        <Link className="btn btn-link" to={`/editT/${props.record._id}`}>Editar</Link>
        {/*<button className="btn btn-link"
          onClick={() => {
            props.deletePacient(props.record._id);
          }}
        >Borrar</button>*/}
      </td>
    </tr>
);

const TriageList = () => {
  const [triages, setTriages] = useState([]);

  const getTriages = async () => {
    const res = await Axios.get("http://localhost:5000/triage");
    setTriages(res.data);
  };

  useEffect(() => {
    getTriages();
  }, []);

  function recordList() {
    return triages.map((triage) => {
      return (
        <Record
          record={triage}
          //deletePacient={() => deletePacient(pacient._id)}
          key={triage._id}
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
    <div style={{marginTop: "110px", marginRight: "20px", marginLeft: "20px"}}>
      <br></br>
      <br></br>
      <h3>Pacientes recientes</h3>
      <table className="table table-striped" style={{ marginTop: 20 }}>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>R.U.T</th>
          </tr>
        </thead>
        <tbody>{recordList()}</tbody>
      </table>
    </div>
  );
};

export default TriageList;