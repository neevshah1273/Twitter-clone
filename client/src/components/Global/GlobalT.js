import React, { useEffect } from "react";
import { useSelector } from "react-redux";

const GlobalT = () => {
    
    //console.log('Hello from Global Component');

    const Tweets = useSelector((state) => state.tweets);
    console.log(Tweets);

    // useEffect(()=>{
    //     console.log(Tweets);
    // },[Tweets]);



    return(
        <div>
            
                 {Tweets?.map( (tweet) => (
                    //console.log(tweet.body);
                    <div key={tweet._id}>
                        {tweet.body}
                    </div>
                ))} 
        </div>
    );
}

export default GlobalT;