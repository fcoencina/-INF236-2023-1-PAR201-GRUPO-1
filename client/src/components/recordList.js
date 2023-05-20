import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Record = (props) => (
 <tr>
   <td>{props.record.name}</td>
   <td>{props.record.rut}</td>
   <td>{props.record.sexo}</td>
   <td>{props.record.f_nac}</td>
   <td>{props.record.direccion}</td>
   <td>{props.record.comuna}</td>
   <td>{props.record.telefono}</td>
   <td>
     <Link className="btn btn-link" to={`/edit/${props.record._id}`}>Editar</Link> |
     <button className="btn btn-link"
       onClick={() => {
         props.deleteRecord(props.record._id);
       }}
     >Borrar</button>
   </td>
 </tr>
);

export default function RecordList() {
 const [records, setRecords] = useState([]);
 
 // This method fetches the records from the database.
 useEffect(() => {
   async function getRecords() {
     const response = await fetch(`http://localhost:5000/record/`);
 
     if (!response.ok) {
       const message = `An error occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const records = await response.json();
     setRecords(records);
   }
 
   getRecords();
 
   return;
 }, [records.length]);
 
 // This method will delete a record
 async function deleteRecord(id) {
   await fetch(`http://localhost:5000/${id}`, {
     method: "DELETE"
   });
 
   const newRecords = records.filter((el) => el._id !== id);
   setRecords(newRecords);
 }
 
 // This method will map out the records on the table
 function recordList() {
   return records.map((record) => {
     return (
       <Record
         record={record}
         deleteRecord={() => deleteRecord(record._id)}
         key={record._id}
       />
     );
   });
 }
 
 // This following section will display the table with the records of individuals.
 return (
   <div style={{marginTop: "150px"}}>
     <h3>Lista de Pacientes</h3>
     <table className="table table-striped" style={{ marginTop: 20 }}>
       <thead>
         <tr>
           <th>Nombre</th>
           <th>R.U.T.</th>
           <th>Sexo</th>
           <th>Fecha de Nacimiento</th>
           <th>Dirección</th>
           <th>Comuna</th>
           <th>Teléfono</th>
           <th>Acción</th>
         </tr>
       </thead>
       <tbody>{recordList()}</tbody>
     </table>
   </div>
 );
}