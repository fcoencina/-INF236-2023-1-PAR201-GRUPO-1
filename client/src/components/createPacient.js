
import React, { useState } from "react";
import { useNavigate } from "react-router";
import Axios from 'axios'

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

// We import NavLink to utilize the react router.
//import { NavLink } from "react-router-dom";

export default function CreatePacient() {
    const [form, setForm] = useState({
        name: "",
        rut: "",
        f_nacimiento: "",
        sexo: "",
        direccion: "",
        comuna: "",
        movil: "",
        prevision: ""
    });

    const navigate = useNavigate();

    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    async function onSubmit(e) {
        e.preventDefault();

        await Axios.post("http://localhost:5000/pacient/add", form);
        setForm({
            name: "",
            rut: "",
            f_nacimiento: "",
            sexo: "",
            direccion: "",
            comuna: "",
            movil: "",
            prevision: ""
        });
        navigate("/");
    }

    return (
        <form onSubmit={onSubmit} style={{ marginTop: "150px" }}>
            <fieldset>
                <legend>Formulario ingreso de paciente</legend>
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
                        onChange={(e) => updateForm({f_nacimiento: e.target.value})}
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
                <button type="submit" className="btn btn-primary">Ingresar paciente</button>
            </fieldset>
        </form>
    );
}