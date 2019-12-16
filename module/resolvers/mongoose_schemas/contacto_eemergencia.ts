import { Schema } from 'mongoose';

const sqm: any = {
    datos_personales_id: Schema.Types.ObjectId,
    nombre: [String],
    apellido: [String],
    telefono: [String],
    identificacion: {
        ci: Boolean,
        number: String
    },
    parentesco: String,
    provincia: String,
    canton: String,
    parroquia: String,
    dir: {
        calle_1: String,
        calle_2: String,
        num_casa: String,
        referencia: String
    }
}

export default new Schema(sqm);