import express from 'express';
import {createTweet, getTweet} from '../controllers/tweets.js';

const router = express.Router();

router.get('/getTweet',getTweet);

router.post('/createTweet',createTweet);

export default router;