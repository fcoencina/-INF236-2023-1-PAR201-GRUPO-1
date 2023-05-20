import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
 
export default function Edit() {
 const [form, setForm] = useState({
    name: "",
    rut: "",
    sexo: "",
    f_nac: "",
    direccion: "",
    comuna: "",
    telefono: "",
    afiliacion: "",
    records: [],
 });
 const params = useParams();
 const navigate = useNavigate();
 
 useEffect(() => {
   async function fetchData() {
     const id = params.id.toString();
     const response = await fetch(`http://localhost:5000/record/${params.id.toString()}`);
 
     if (!response.ok) {
       const message = `An error has occurred: ${response.statusText}`;
       window.alert(message);
       return;
     }
 
     const record = await response.json();
     if (!record) {
       window.alert(`Record with id ${id} not found`);
       navigate("/");
       return;
     }
 
     setForm(record);
   }
 
   fetchData();
 
   return;
 }, [params.id, navigate]);
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 async function onSubmit(e) {
    e.preventDefault();
    const editedPerson = {
      name: form.name,
      rut: form.rut,
      sexo: form.sexo,
      f_nac: form.f_nac,
      direccion: form.direccion,
      comuna: form.comuna,
      telefono: form.telefono,
      afiliacion: form.afiliacion
    };
  
    // This will send a post request to update the data in the database.
    await fetch(`http://localhost:5000/update/${params.id}`, {
      method: "POST",
      body: JSON.stringify(editedPerson),
      headers: {
        'Content-Type': 'application/json'
      },
    });
  
    navigate("/");
  }
 
 // This following section will display the form that takes input from the user to update the data.
 return (
   <div style={{marginTop: "150px"}}>
     <h3>Editar Datos del Paciente</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Nombre: </label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="rut">R.U.T. :</label>
         <input
           type="text"
           className="form-control"
           id="rut"
           value={form.rut}
           onChange={(e) => updateForm({ rut: e.target.value })}
         />
       </div>
       <label>Sexo:</label>
       <div className="form-group">
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="sexo"
             value="masculino"
             checked={form.sexo === "masculino"}
             onChange={(e) => updateForm({ sexo: e.target.value })}
           />
           <label htmlFor="sexoMasculino" className="form-check-label">Masculino</label>
         </div>
         <div className="form-check form-check-inline">
           <input
             className="form-check-input"
             type="radio"
             name="positionOptions"
             id="sexo"
             value="femenino"
             checked={form.sexo === "femenino"}
             onChange={(e) => updateForm({ sexo: e.target.value })}
           />
           <label htmlFor="sexoFemenino" className="form-check-label">Femenino</label>
         </div>
       </div>
       <div>
        <label>Fecha de Nacimiento:</label>
        <br></br>
        <input
          className="from-date"
          type="date"
          id="f_nac"
          value={form.f_nac}
          onChange={(e) => updateForm({ f_nac: e.target.value})}
        />
       </div>
       <div className="form-group">
         <label htmlFor="direccion">Direccion:</label>
         <input
           type="text"
           className="form-control"
           id="direccion"
           value={form.direccion}
           onChange={(e) => updateForm({ direccion: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="comuna">Comuna:</label>
         <input
           type="text"
           className="form-control"
           id="comuna"
           value={form.comuna}
           onChange={(e) => updateForm({ comuna: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="telefono">Teléfono:</label>
         <input
           type="text"
           className="form-control"
           id="telefono"
           value={form.telefono}
           onChange={(e) => updateForm({ telefono: e.target.value })}
         />
       </div>
      <br></br>
       <div className="form-group">
         <input
           type="submit"
           value="Update Record"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}