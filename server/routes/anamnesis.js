
//CRUD anamnesis
const express = require("express");
const anamnesisSchema = require("../models/anamnesis");

//Aquí se crea un enrutador de anamnesis
const router = express.Router();

//Create anamnesis
router.post("/anamnesis/add", (req, res) => {
    //Creamos una anamnesis
    const anamnesis = anamnesisSchema({
        paciente: req.body.paciente,
        fecha_hora: req.body.fecha_hora,
        funcionario: req.body.funcionario,
        explo_fisica: req.body.explo_fisica,
        diagnostico: req.body.diagnostico,
        diagCIE_10: req.body.diagCIE_10,
        createdAt: new Date()
    });

    anamnesis
    .save()
    .then((data) => res.json(data))
    .catch((Error) => res.json({message: Error}));
});

//get all users
router.get("/anamnesis", (req, res) => {
    anamnesisSchema
    .find()
    .sort({ createdAt: -1 }) // Ordenar por campo createdAt en orden descendente (-1)
    .then((data) => res.json(data))
    .catch((Error) => res.json({message: Error}));
});

//get a user
router.get("/anamnesis/:id", (req, res) => {
    const {id} = req.params;
    anamnesisSchema
    .findById(id)
    .then((data) => res.json(data))
    .catch((Error) => res.json({message: Error}));
});

//update user
router.put("/uanamnesis/:id", (req, res) => {
    const {id} = req.params;
    const {paciente, fecha_hora, funcionario, explo_fisica,
        diagnostico, diagCIE_10} = req.body;
    anamnesisSchema
    .updateOne({_id: id}, {$set: {paciente, fecha_hora, funcionario, explo_fisica,
        diagnostico, diagCIE_10}})
    .then((data) => res.json(data))
    .catch((Error) => res.json({message: Error}));
})

//delete user
router.delete("/deleteanamnesis/:id", (req, res) => {
    const {id} = req.params;
    pacientSchema
    .deleteOne({_id: id})
    .then((data) => res.json(data))
    .catch((Error) => res.json({message: Error}));
})

module.exports = router;