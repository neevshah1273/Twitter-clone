import mongoose from 'mongoose';
const {ObjectId}= mongoose.Schema.Types;
const userSchema = mongoose.Schema({
    email : {type: String, required: true},
    password : {type: String, required: true},
    id : {type: String},
    followers:[{type:ObjectId,ref:"User"}],
    following:[{type:ObjectId,ref:"User"}]
})

export default mongoose.model('user', userSchema);