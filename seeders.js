import Assest from './models/Asset.js';
import connectDB from './config/db.js';
import dotenv from 'dotenv'
import axios from 'axios'


dotenv.config()


connectDB();



const bulkPlaforms = async()=>{
const {data} = await axios.get('https://api.coingecko.com/api/v3/asset_platforms')
   await Assest.insertMany(data)
}

bulkPlaforms().then(()=>{
    console.log('yeeah inserted');
})