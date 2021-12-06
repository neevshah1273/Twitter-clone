import Tweet from "../models/Tweet.js";
import user from "../models/user.js";

export const createTweet = async(req,res) => {
    const tweet = req.body;

    const newTweet = new Tweet(tweet);

    

    try {
        
        await newTweet.save();

        res.status(201).json(newTweet);
    } catch (error) {
        //console.log(error);
        res.status(409).json({message : error.message});
    }
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