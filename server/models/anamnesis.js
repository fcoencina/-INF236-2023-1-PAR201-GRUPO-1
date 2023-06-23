
const mongoose = require("mongoose");

const anamnesisSchema = mongoose.Schema({
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
    fecha_hora:{
        type: String,
        required: false
    },
    funcionario:{
        type: String,
        required: false
    },
    obs:{
        type: String,
        required: false
    },
    explo_fisica:{
        type: String,
        required: false
    },
    medicamentos:{
        type: String,
        required: false
    },
    diagnostico:{
        type: String,
        required: false
    },
    diagCIE_10:{
        type: String,
        required: false
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
  }, { collection: "anamnesis" });

                            //nombre con el q llamo, schema
module.exports = mongoose.model("anamnesis", anamnesisSchema);