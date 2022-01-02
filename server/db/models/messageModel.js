const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//** USER MODEL **//
// ** MODEL is like a TABEL and Ad is table name**//

// Create Schema
const messageSchema = new Schema({
    name: { type: String, required: "Enter Name" },
    description: { type: String, required: "Enter Description" },
    date:{type:Date, default:Date.now },
    phone: { type: Number, required: "Enter Phone Number" },
    adId:{type: Schema.Types.ObjectId, ref: 'AdModel'},
    userId:{ type: Schema.Types.ObjectId, ref: 'User' }
});

var Message = mongoose.model('Message', messageSchema);

module.exports = { Message };


  