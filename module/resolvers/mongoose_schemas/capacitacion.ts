import { Schema } from 'mongoose';

const sqm: any = {
    datos_personales_id: Schema.Types.ObjectId,
    tipo: String,
    tema: String,
    institucion: String,
    horas: Number,
    cert: String,
    fecha_inicio: Date,
    fecha_fin: Date,
    pais: String,
    provincia: String,
    tipo_cert: String
}

export default new Schema(sqm);