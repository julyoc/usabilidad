import { Schema } from 'mongoose';

const sqm: any = {
    datos_personales_id: Schema.Types.ObjectId,
    provincia: String,
    canton: String,
    parroquia: String,
    dir: {
        calle_1: String,
        calle_2: String,
        num_casa: String,
        referencia: String
    },
    telefono: [{ext: {type:String, default: ''}, num: String}]
}

export default new Schema(sqm);