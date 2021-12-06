import express from 'express';
import {signin,signup,follow,unfollow} from '../controllers/users.js';

const router = express.Router();

router.post('/signin',signin);
router.post('/signup',signup);

router.put('/follow',follow);
router.put('/unfollow',unfollow);


export default router;