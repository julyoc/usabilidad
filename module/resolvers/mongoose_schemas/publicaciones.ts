import { Schema } from 'mongoose';

const sqm: any = {
    datos_personales_id: Schema.Types.ObjectId,
    titulo: String,
    participacion: String,
    idioma: String,
    doi: String,
    estado: String,
    publicador: String,
    fecha: Date,
    volumen: String,
    revision: String,
    tipo: String
}

export default new Schema(sqm);