import React from "react";
 
// We use Route in order to define the different routes of our application
import { Route, Routes } from "react-router-dom";
 
// We import all the components we need in our app
import Navbar from "./components/navbar";
import PacientsList from "./components/pacientsList";
import EditPacient from "./components/editPacient";
import CreatePacient from "./components/createPacient";
import Search from "./components/search";
 
const App = () => {
 return (
   <div>
     <Navbar />
     <Routes>
       <Route exact path="/" element={<PacientsList/>}/>
       <Route path="/edit/:id" element={<EditPacient/>}/>
       <Route path="/create" element={<CreatePacient/>}/>
       <Route path="/search" element={<Search/>}/>
     </Routes>
   </div>
 );
};
 
export default App;