import Tweet from "../models/Tweet.js";
import user from "../models/user.js";

export const createTweet = async(req,res) => {
    //console.log('Not Reached');
    const {newTweet,userid} = req.body;
    console.log(newTweet);
    console.log(userid);
    
    const cuser=user.findById(userid).then((result)=>{
        const newTt = new Tweet({
            'body':newTweet,
            'postedBy':result});
            try {
        
                newTt.save().then(()=>{
                    res.status(201).json(newTt);
                    console.log('sucess');    
                })
        
            } catch (error) {
                //console.log(error.message);
                res.status(409).json({message : error.message});
            }
    
    })
    //console.log(cuser);

    

    
}

export const getTweet = async(req,res) => {
    
    const {userid} = req.body;

    const curruser = await user.findById(userid);
    
    Tweet.find({postedBy:{$in:curruser.following}})
    .populate("postedBy","_id name")
    .populate("comments.postedBy","_id name")
    .sort('-createdAt')
    .then(tweets=>{
        res.json({tweets})
    })
    .catch(err=>{
        console.log(err)
    })
}