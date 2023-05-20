import React, { useState } from "react";
import { useNavigate } from "react-router";
 
export default function Create() {
 const [form, setForm] = useState({
   name: "",
   rut: "",
   sexo: "",
   f_nac: "",
   direccion: "",
   comuna: "",
   telefono: "",
   afiliacion: ""
 });
 const navigate = useNavigate();
 
 // These methods will update the state properties.
 function updateForm(value) {
   return setForm((prev) => {
     return { ...prev, ...value };
   });
 }
 
 // This function will handle the submission.
 async function onSubmit(e) {
   e.preventDefault();
 
   // When a post request is sent to the create url, we'll add a new record to the database.
   const newPerson = { ...form };
 
   await fetch("http://localhost:5000/record/add", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
     },
     body: JSON.stringify(newPerson),
   })
   .catch(error => {
     window.alert(error);
     return;
   });
 
   setForm({
      name: "",
      rut: "",
      sexo: "",
      f_nac: "",
      direccion: "",
      comuna: "",
      telefono: "",
      afiliacion: ""});
   navigate("/");
 }
 
 // This following section will display the form that takes the input from the user.
 return (
   <div style={{marginTop: "150px"}}>
     <h3>Crear un nuevo Paciente</h3>
     <form onSubmit={onSubmit}>
       <div className="form-group">
         <label htmlFor="name">Nombre</label>
         <input
           type="text"
           className="form-control"
           id="name"
           value={form.name}
           onChange={(e) => updateForm({ name: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="rut">R.U.T.</label>
         <input
           type="text"
           className="form-control"
           id="rut"
           value={form.position}
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
         <label htmlFor="direccion">Direccion.</label>
         <input
           type="text"
           className="form-control"
           id="direccion"
           value={form.position}
           onChange={(e) => updateForm({ direccion: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="comuna">Comuna</label>
         <input
           type="text"
           className="form-control"
           id="comuna"
           value={form.position}
           onChange={(e) => updateForm({ comuna: e.target.value })}
         />
       </div>
       <div className="form-group">
         <label htmlFor="telefono">Teléfono</label>
         <input
           type="text"
           className="form-control"
           id="telefono"
           value={form.position}
           onChange={(e) => updateForm({ telefono: e.target.value })}
         />
       </div>
       <br></br>
       <div className="form-group">
         <input
           type="submit"
           value="Crear Paciente"
           className="btn btn-primary"
         />
       </div>
     </form>
   </div>
 );
}