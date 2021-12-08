import express from 'express';
import {createTweet, getTweet,getallTweet} from '../controllers/tweets.js';

const router = express.Router();

router.get('/getTweet',getTweet);

router.get('/all',getallTweet);

router.post('/createTweet',createTweet);

export default router;