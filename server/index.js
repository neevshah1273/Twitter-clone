import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import userRoutes from './routes/users.js';
import tweetRoutes from './routes/tweets.js';

const app = express();

app.use(express.json({limit : "30mb", extended: true}));
app.use(express.urlencoded({limit : "30mb", extended: true}));
app.use(cors());

app.use('/user',userRoutes);
app.use('/tweet',tweetRoutes);

const CONNECTION_URL = 'mongodb+srv://NeevShah:x9IcEHC1iaNuYm57@cluster0.ln8cj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
const PORT = process.env.PORT || 5000;

mongoose.connect( CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true})
.then(()=> app.listen(PORT,()=> console.log(`Server running on port: ${PORT}`)))
.catch((error)=> console.log(error.message));

