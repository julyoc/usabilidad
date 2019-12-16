import { Schema } from 'mongoose';

const sqm: any = {
    datos_personales_id: Schema.Types.ObjectId,
    tipo: String,
    nombre: String,
    cuenta: String,
    num_cuenta: String
}

export default new Schema(sqm);