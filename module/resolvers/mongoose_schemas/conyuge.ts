import { Schema } from 'mongoose';

const sqm: any = {
    datos_personales_id: Schema.Types.ObjectId,
    nombre: [String],
    apellido: [String],
    relacion: String,
    nacimiento: Date
}

export default new Schema(sqm);