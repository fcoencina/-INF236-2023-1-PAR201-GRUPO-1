
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Axios from 'axios';

export default function Edit() {
    const [form, setForm] = useState({
        remitido_por: "",
        centro_remitente: "",
        motivo_consulta: "",
        signos_vitales: "",
        fecha_hora: "",
        categorizaciones: "",
    });
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const res = await Axios.get(`http://localhost:5000/triage/${params.pacient_id}`);
            setForm(res.data);                        
        }

        fetchData();

        return;
    }, [params.pacient_id, navigate]);

    // These methods will update the state properties.
    function updateForm(value) {
        return setForm((prev) => {
            return { ...prev, ...value };
        });
    }

    async function onSubmit(e) {
        e.preventDefault();
        const editedTriage = {
            remitido_por: form.remitido_por,
            centro_remitente: form.centro_remitente,
            motivo_consulta: form.motivo_consulta,
            signos_vitales: form.signos_vitales,
            fecha_hora: form.fecha_hora,
            categorizaciones: form.categorizaciones
        };

        // This will send a post request to update the data in the database.
        await Axios.put(`http://localhost:5000/utriage/${params.pacient_id}`, editedTriage);

        navigate("/");
    }

    // This following section will display the form that takes input from the user to update the data.
    return (
        <form onSubmit={onSubmit} style={{ marginTop: "150px", marginBottom: "30px", marginRight: "30px", marginLeft: "30px" }}>
            <fieldset>
                <legend>Formulario Triage</legend>
                <div className="row">
                    <div className="col-6">
                        <div className="form-group">
                            <label className="col-form-label mt-4" for="inputDefault">Remitido Por</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ingrese remitente"
                                id="inputDefault"
                                value={form.remitido_por}
                                onChange={(e) => updateForm({ remitido_por: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label className="col-form-label mt-4" for="inputDefault">Centro Remitente</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ingrese Centro Remitente"
                                id="inputDefault"
                                value={form.centro_remitente}
                                onChange={(e) => updateForm({ centro_remitente: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label className="col-form-label mt-4" for="inputDefault">Motivo Consulta</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ingrese Motivo Consulta"
                                id="inputDefault"
                                value={form.motivo_consulta}
                                onChange={(e) => updateForm({ motivo_consulta: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <label className="col-form-label mt-4" for="inputDefault">Signos Vitales</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ingrese Signos Vitales"
                                id="inputDefault"
                                value={form.signos_vitales}
                                onChange={(e) => updateForm({ signos_vitales: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label className="col-form-label mt-4" for="inputDefault">Fecha/Hora</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ingrese Fecha/Hora"
                                id="inputDefault"
                                value={form.fecha_hora}
                                onChange={(e) => updateForm({ fecha_hora: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label className="col-form-label mt-4" for="inputDefault">Categorizaciones</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ingrese Categorización"
                                id="inputDefault"
                                value={form.categorizaciones}
                                onChange={(e) => updateForm({ categorizaciones: e.target.value })}
                            />
                        </div>
                    </div>
                </div>
                <br></br>
                <button type="submit" className="btn btn-primary">Guardar</button>
            </fieldset>
        </form>
    );
}