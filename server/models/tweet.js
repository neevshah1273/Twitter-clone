import mongoose from 'mongoose';

const {ObjectId}= mongoose.Schema.Types;

const tweetSchema = mongoose.Schema({
    id : {type: String},
    body:{
        type:String,
        required:true
    },
    /*photo:{
        type:String,
        required:true
    },*/
    likes:[{type:ObjectId,ref:"User"}],
    comments:[{
        text:String,
        postedBy:{type:ObjectId,ref:"User"}
    }],
    postedBy:{
       type:ObjectId,
       ref:"User"
    }
},{timestamps:true})

export default mongoose.model('Tweet', tweetSchema);