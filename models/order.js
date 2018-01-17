import mongoose from '../db';
var Schema = mongoose.Schema;

var schema = new Schema({

    username: String,
    address: String,
    wechat: String,
    tel: Number,

    holdC: { type: String, enum: ['CNY', 'AUD'], required: true },
    wantC: { type: String, enum: ['CNY', 'AUD'], required: true },

    holdA: { type: Number, required: true },
    wantA: { type: Number, required: true },

    createdAt: { type: Date, default: Date.now },
    done: { type: Boolean, default: false }

});

let orders = mongoose.model('orders', schema);

export default orders;
