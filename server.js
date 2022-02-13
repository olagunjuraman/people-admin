import express from 'express';
import connectDB from './config/db.js';
import Assest from './models/Asset.js'
import dotenv from 'dotenv';

dotenv.config()

connectDB();


const app = express();


app.get('/api/v1/get-platform-assest', async(req, res)=>{
    const {pageNumber} = req.query
    const page = pageNumber || 1
    const limit = 10
    let offset = (page - 1) * 10
   const assests =  await Assest.find({}).skip(offset).limit(limit);
   res.status(200).json({
       page,
       data: assests,
       success: true,
       count: assests.length
   });
});

const PORT = process.env.PORT || 5000

app.listen(PORT, ()=>{
  console.log('App listening on port 5000');
});



