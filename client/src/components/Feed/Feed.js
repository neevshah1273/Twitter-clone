import React,{useEffect,useState} from "react";
import {TextField} from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useLocation } from 'react-router-dom';
import { createTweets, getGlobal } from "../../actions/tweets";
import { Input } from "reactstrap";
import './Feed.css';

const Feed = () => {

    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')));
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const location = useLocation();

    const LogOut = () => {

        navigate('/');
        
        dispatch({ type: 'LOGOUT' });
        setUser(null);
    }

    const traverseGlobal = (e) => {
        e.preventDefault();
        try {
            console.log('trying');
            dispatch(getGlobal(navigate));
        } catch (error) {
            console.log(error.message);
        }
        
        //console.log('Clicking this button');
        //navigate('/GlobalT');
    }

    useEffect(() => {
        const token = user?.token;

        setUser(JSON.parse(localStorage.getItem('profile')).result);
    }, [location]);

    const postTweet = (e) => {
        e.preventDefault();
        
        dispatch(createTweets(tweettext,user._id));
        
        Settweettext('');
    }


    const [tweettext,Settweettext] = useState('')

    return(
        <div className="tw">
            Feed here
            <div className="tww">
            <TextField
                name="content"
                variant="outlined"
                fullWidth
                placeholder="Bring creativity in 140 letters"
                value={tweettext}
                onChange={(event) => {
                    Settweettext(event.target.value);
                    console.log(tweettext);
                }}                                
            />
            <button onClick={postTweet}>
                Post Tweet
            </button>
            </div>
            <div>
                <button onClick={traverseGlobal}>
                    Go Global
                </button>
            </div>
            <div>
                
                Tweets here
            </div>
        </div>
    )
}

export default Feed;