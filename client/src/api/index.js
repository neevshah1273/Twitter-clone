import axios from 'axios';

const API = axios.create({baseURL:'http://localhost:5000'});


export const signIn = (formData) => API.post('/user/signin', formData);

export const signUp = (formData) => API.post('/user/signup', formData);

export const fetchTweets = () => API.get('/tweet/getTweet');
export const createTweet = (newTweet,userid) => API.post('/tweet/createTweet',{newTweet,userid});