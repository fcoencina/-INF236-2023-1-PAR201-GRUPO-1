
const mongoose = require("mongoose");

const pacientSchema = mongoose.Schema({
    name: {
        type: String,
        required: false
    },
    rut: {
        type: String,
        required: false
    },
    f_nacimiento: {
        type: String,
        required: false
    },
    sexo: {
        type: String,
        required: false
    },
    direccion: {
        type: String,
        required: false
    },
    comuna: {
        type: String,
        required: false
    },
    movil: {
        type: String,
        required: false
    },
    prevision: {
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, {collection: "pacients"});

                            //nombre con el q llamo, schema
module.exports = mongoose.model("pacient", pacientSchema);