import { Schema } from 'mongoose';

const sqm: any = {
    datos_personales_id: Schema.Types.ObjectId,
    nivel: String,
    institucion: String,
    titulo: String,
    registro: Date,
    graduacion: Date,
    pais: String,
    num_snc: String,
    tiempo: Number,
    area: String
}

export default new Schema(sqm);