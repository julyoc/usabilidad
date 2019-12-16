import { Schema } from 'mongoose';

const sqm: any = {
    datos_personales_id: Schema.Types.ObjectId,
    provincia: String,
    canton: String,
    fecha: Date,
    notaria: {
        num: Number,
        lugar: String
    }
}

export default new Schema(sqm);