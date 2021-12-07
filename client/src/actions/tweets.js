import * as api from '../api';


export const getTweets = () => async(dispatch)=>{
    try {
        const {data} = await api.fetchTweets();

        dispatch({ type : 'FETCH_ALL',payload : data});
    } catch (error) {
        console.log(error.message);
    }
}

export const createTweets = (text,userid) => async(dispatch) =>{

    

    try {
        const {data} = await api.createTweet(text,userid);
        
        dispatch({ type: 'CREATE',payload:data});
    } catch (error) {
        console.log(error);
    }
}