import React from "react";

// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";

// We import all the components we need in our app
import Navbar from "./components/navbar";
import PacientsList from "./ingreso/pacientsList";
import CreatePacient from "./ingreso/createPacient";
import EditPacient from "./ingreso/editPacient";
import Search from "./components/search";
import EditTriage from './triage/editTriage';
import TriagesList from './triage/triagesList';
import EditAnamnesis from './anamnesis/editAnamnesis';
import AnamnesisList from './anamnesis/anamnesisList'

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<PacientsList />} />
        <Route path="/createP" element={<CreatePacient />} />
        <Route path="/editP/:id" element={<EditPacient />} />
        <Route path="/search" element={<Search />} />
        <Route path="/Tlist" element={<TriagesList />} />
        <Route path="/editT/:pacient_id" element={<EditTriage />} />
        <Route path="/Alist" element={<AnamnesisList />} />
        <Route path="/editA/:pacient_id" element={<EditAnamnesis />} />
      </Routes>
    </div>
  );
};

export default App;