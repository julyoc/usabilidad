import { Schema } from 'mongoose';

const sqm: any = {
    datos_personales_id: Schema.Types.ObjectId,
    nombre: [String],
    apellido: [String],
    parentesco: String,
    identificacion: String,
    instruccion: Number,
    nacimiento: Date,
    discapasidad: {
        discapasidad: Boolean,
        tipo: {type: String, default: ''},
        nivel: {type: Schema.Types.Decimal128, default: 0.0},
        carnet: {type: String, default: ''}
    },
    sangre: String
}

export default new Schema(sqm);