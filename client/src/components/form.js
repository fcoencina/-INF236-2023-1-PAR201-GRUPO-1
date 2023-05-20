
import React from "react";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

// We import NavLink to utilize the react router.
//import { NavLink } from "react-router-dom";

export default function Form() {
    return (
        <form style={{marginTop: "150px"}}>
            <fieldset>
                <legend>Formulario</legend>
                <div class="form-group">
                    <label class="col-form-label mt-4" for="inputDefault">Nombre</label>
                    <input type="text" class="form-control" placeholder="Ingrese nombre del paciente" id="inputDefault" />
                </div>
                <div className="form-group">
                    <label for="exampleInputEmail1" className="form-label mt-4">Email</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ingrese email"/>
                </div>
                <div className="form-group">
                    <label for="exampleSelect1" className="form-label mt-4">Sexo</label>
                    <select className="form-select" id="exampleSelect1">
                        <option>Masculino</option>
                        <option>Femenino</option>
                    </select>
                </div>
                <div class="form-group">
                    <label class="col-form-label mt-4" for="inputDefault">Dirección</label>
                    <input type="text" class="form-control" placeholder="Ingrese dirección del paciente" id="inputDefault" />
                </div>
                <div class="form-group">
                    <label class="col-form-label mt-4" for="inputDefault">Móvil</label>
                    <input type="text" class="form-control" placeholder="Formato: +569..." id="inputDefault" />
                </div>
                <div className="form-group">
                    <label for="exampleSelect1" className="form-label mt-4">Categoria emergencia</label>
                    <select className="form-select" id="exampleSelect1">
                        <option>C1</option>
                        <option>C2</option>
                        <option>C3</option>
                        <option>C4</option>
                        <option>C5</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="exampleSelect2" className="form-label mt-4">Example multiple select</label>
                    <select multiple="" className="form-select" id="exampleSelect2">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </select>
                </div>
                <div className="form-group">
                    <label for="exampleTextarea" className="form-label mt-4">Observaciones</label>
                    <textarea className="form-control" id="exampleTextarea" rows="3"></textarea>
                </div>
                <div className="form-group">
                    <label for="formFile" className="form-label mt-4">Default file input example</label>
                    <input className="form-control" type="file" id="formFile" />
                </div>
                <fieldset className="form-group">
                    <legend className="mt-4">Radio buttons</legend>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="optionsRadios" id="optionsRadios1" value="option1" checked="" />
                        <label className="form-check-label" for="optionsRadios1">
                            Option one is this and that—be sure to include why it's great
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="radio" name="optionsRadios" id="optionsRadios2" value="option2" />
                        <label className="form-check-label" for="optionsRadios2">
                            Option two can be something else and selecting it will deselect option one
                        </label>
                    </div>
                    <div className="form-check disabled">
                        <input className="form-check-input" type="radio" name="optionsRadios" id="optionsRadios3" value="option3" disabled="" />
                        <label className="form-check-label" for="optionsRadios3">
                            Option three is disabled
                        </label>
                    </div>
                </fieldset>
                <fieldset className="form-group">
                    <legend className="mt-4">Checkboxes</legend>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" for="flexCheckDefault">
                            Default checkbox
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckChecked" checked="" />
                        <label className="form-check-label" for="flexCheckChecked">
                            Checked checkbox
                        </label>
                    </div>
                </fieldset>
                <fieldset className="form-group">
                    <legend className="mt-4">Switches</legend>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" />
                        <label className="form-check-label" for="flexSwitchCheckDefault">Default switch checkbox input</label>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" id="flexSwitchCheckChecked" checked="" />
                        <label className="form-check-label" for="flexSwitchCheckChecked">Checked switch checkbox input</label>
                    </div>
                </fieldset>
                <fieldset className="form-group">
                    <legend className="mt-4">Ranges</legend>
                    <label for="customRange1" className="form-label">Example range</label>
                    <input type="range" className="form-range" id="customRange1" />
                    <label for="disabledRange" className="form-label">Disabled range</label>
                    <input type="range" className="form-range" id="disabledRange" disabled="" />
                    <label for="customRange3" className="form-label">Example range</label>
                    <input type="range" className="form-range" min="0" max="5" step="0.5" id="customRange3" />
                </fieldset>
                <button type="submit" className="btn btn-primary">Submit</button>
            </fieldset>
        </form>
    );
}