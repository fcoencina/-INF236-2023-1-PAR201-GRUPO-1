import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Axios from 'axios';

export default function Edit() {
  const [form, setForm] = useState({
    name: "",
    rut: "",
    sexo: "",
    f_nacimiento: "",
    direccion: "",
    comuna: "",
    movil: "",
    prevision: "",
    records: [],
  });
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const res = await Axios.get(`http://localhost:5000/pacient/${params.id}`);
      setForm(res.data);
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
      f_nacimiento: form.f_nacimiento,
      direccion: form.direccion,
      comuna: form.comuna,
      movil: form.movil,
      prevision: form.prevision
    };

    // This will send a post request to update the data in the database.
    await Axios.put(`http://localhost:5000/upacient/${params.id}`, editedPerson);

    navigate("/");
  }

  // This following section will display the form that takes input from the user to update the data.
  return (
    <form onSubmit={onSubmit} style={{ marginTop: "150px" }}>
      <fieldset>
        <legend>Formulario actualización de paciente</legend>
        <div className="form-group">
          <label className="col-form-label mt-4" for="inputDefault">Nombre</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese nombre del paciente"
            id="inputDefault"
            value={form.name}
            onChange={(e) => updateForm({ name: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label className="col-form-label mt-4" for="inputDefault">R.U.T</label>
          <input
            type="text"
            className="form-control"
            placeholder="Formato: 12345678-9"
            id="inputDefault"
            value={form.rut}
            onChange={(e) => updateForm({ rut: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label className="col-form-label mt-4" for="inputDefault">Fecha de nacimiento</label>
          <input
            type="date"
            className="form-control"
            placeholder="Formato: 12345678-9"
            id="inputDefault"
            value={form.f_nacimiento}
            onChange={(e) => updateForm({ f_nacimiento: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label for="exampleSelect1" className="form-label mt-4">Sexo</label>
          <select className="form-select" id="exampleSelect1" value={form.sexo} onChange={(e) => updateForm({ sexo: e.target.value })}>
            <option value="">Seleccione</option>
            <option value="Masculino">Masculino</option>
            <option value="Femenino">Femenino</option>
          </select>
        </div>
        <div className="form-group">
          <label className="col-form-label mt-4" for="inputDefault">Dirección</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese dirección del paciente"
            id="inputDefault"
            value={form.direccion}
            onChange={(e) => updateForm({ direccion: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label className="col-form-label mt-4" for="inputDefault">Comuna</label>
          <input
            type="text"
            className="form-control"
            placeholder="Ingrese comuna del paciente"
            id="inputDefault"
            value={form.comuna}
            onChange={(e) => updateForm({ comuna: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label className="col-form-label mt-4" for="inputDefault">Móvil</label>
          <input
            type="text"
            className="form-control"
            placeholder="Formato: +569..."
            id="inputDefault"
            value={form.movil}
            onChange={(e) => updateForm({ movil: e.target.value })}
          />
        </div>
        <div className="form-group">
          <label for="exampleSelect1" className="form-label mt-4">Previsión</label>
          <select className="form-select" id="exampleSelect1" value={form.prevision} onChange={(e) => updateForm({ prevision: e.target.value })}>
            <option value="">Seleccione</option>
            <option value="Fonasa A">Fonasa A</option>
            <option value="Fonasa B">Fonasa B</option>
            <option value="Fonasa C">Fonasa C</option>
            <option value="Fonasa D">Fonasa D</option>
            <option value="Isapre">Isapre</option>
          </select>
        </div>
        <br></br>
        <button type="submit" className="btn btn-primary">Actualizar datos</button>
      </fieldset>
    </form>
  );
}