import { Schema } from 'mongoose';

const sqm: any = {
    datos_personales_id: Schema.Types.ObjectId,
    nombre: String,
    u_administrativa: String,
    motivo_ingreso: String,
    motivo_salida: String,
    pais: String,
    provincia: String,
    fecha_ingreso: Date,
    fecha_salida: Date,
    tipo_institucion: String,
    puesto: String
}

export default new Schema(sqm);