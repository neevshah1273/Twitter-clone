import * as api from '../api';


export const getTweets = () => async(dispatch)=>{
    try {
        const {data} = await api.fetchTweets();

        dispatch({ type : 'FETCH_ALL',payload : data});
    } catch (error) {
        console.log(error.message);
    }
}

export const getGlobal = (navigate) => async(dispatch)=>{
    console.log('F');
    try {
        console.log('asd');
        const {data} = await api.fetchGlobal();

        console.log({data});
        


        dispatch({type:'FETCH_GLOBAL',payload:data});

        navigate('/GlobalT');

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