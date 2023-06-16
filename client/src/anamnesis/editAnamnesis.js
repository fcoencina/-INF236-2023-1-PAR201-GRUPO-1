
import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import Axios from 'axios';

export default function Edit() {
    const [form, setForm] = useState({
        fecha_hora: "",
        funcionario: "",
        explo_fisica: "",
        diagnostico: "",
        diagCIE_10: ""
    });
    const params = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        async function fetchData() {
            const res = await Axios.get(`http://localhost:5000/anamnesis/${params.pacient_id}`);
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
        const editedAnamnesis = {
            fecha_hora: form.fecha_hora,
            funcionario: form.funcionario,
            explo_fisica: form.explo_fisica,
            diagnostico: form.diagnostico,
            diagCIE_10: form.diagCIE_10
        };

        // This will send a post request to update the data in the database.
        await Axios.put(`http://localhost:5000/uanamnesis/${params.pacient_id}`, editedAnamnesis);

        navigate("/");
    }

    // This following section will display the form that takes input from the user to update the data.
    return (
        <form onSubmit={onSubmit} style={{ marginTop: "150px", marginBottom: "30px", marginRight: "30px", marginLeft: "30px" }}>
            <fieldset>
                <legend>Formulario Anamnesis</legend>
                <div className="row">
                    <div className="col-6">
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
                            <label className="col-form-label mt-4" for="inputDefault">Funcionario</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ingrese Funcionario"
                                id="inputDefault"
                                value={form.funcionario}
                                onChange={(e) => updateForm({ funcionario: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label className="col-form-label mt-4" for="inputDefault">Exploración Física</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ingrese Exploración Física"
                                id="inputDefault"
                                value={form.explo_fisica}
                                onChange={(e) => updateForm({ explo_fisica: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className="col-6">
                        <div className="form-group">
                            <label className="col-form-label mt-4" for="inputDefault">Diagnóstico</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ingrese Diagnóstico"
                                id="inputDefault"
                                value={form.diagnostico}
                                onChange={(e) => updateForm({ diagnostico: e.target.value })}
                            />
                        </div>
                        <div className="form-group">
                            <label className="col-form-label mt-4" for="inputDefault">Diagnóstico CIE-10</label>
                            <input
                                type="text"
                                className="form-control"
                                placeholder="Ingrese Diagnóstico CIE-10"
                                id="inputDefault"
                                value={form.diagCIE_10}
                                onChange={(e) => updateForm({ diagCIE_10: e.target.value })}
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