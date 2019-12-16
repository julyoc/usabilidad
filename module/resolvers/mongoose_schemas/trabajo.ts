import { Schema } from 'mongoose';

const sqm: any = {
    datos_personales_id: Schema.Types.ObjectId,
    sede: String,
    cargo: String,
    departamento: String,
    tiempo: Number,
    firma: String,
    fecha: {type: Date, default: Date.now()}
}

export default new Schema(sqm);