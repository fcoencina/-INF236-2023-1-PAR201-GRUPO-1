
const mongoose = require("mongoose");

const triageSchema = mongoose.Schema({
    paciente:{
        id:{
            type: mongoose.Schema.Types.ObjectId,
            ref: "pacient",
            required: true
        },
        name:{
            type: String,
            required: false
        },
        rut:{
            type: String,
            required: false
        }
    },
    remitido_por:{
        type: String,
        required: false
    },
    centro_remitente:{
        type: String,
        required: false
    },
    motivo_consulta:{
        type: String,
        required: false
    },
    signos_vitales:{
        type: String,
        required: false
    },
    fecha_hora:{
        type: String,
        required: false
    },
    categorizaciones:{
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
  }, { collection: "triages" });

                            //nombre con el q llamo, schema
module.exports = mongoose.model("triage", triageSchema);