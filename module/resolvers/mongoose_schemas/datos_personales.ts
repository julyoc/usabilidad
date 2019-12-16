import { Schema } from 'mongoose';

const sqm: any = {
    identificacion: {
        ci: Boolean,
        number: {type: String, unique: true}
    },
    nombre: [String],
    apellido: [String],
    nacimiento: Date,
    edad: Number,
    nacionalidad: String,
    residencia: {type: Number, default: 0},
    sangre: String,
    enfermedades: {
        enfermedad: Boolean,
        tipo: {type: String, default: ''}
    },
    sexo: String,
    discapasidad: {
        discapasidad: Boolean,
        tipo: {type: String, default: ''},
        nivel: {type: Number, default: 0.0},
        carnet: {type: String, default: ''}
    },
    iden_etnica: String,
    mail: [String]
};

export default new Schema(sqm);