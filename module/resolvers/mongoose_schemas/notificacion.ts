import { Schema } from 'mongoose';

const sqm: any = {
    endpoint: String,
    keys: {
        auth: {type: String},
        p256dh: String
    }
}
export default new Schema(sqm);