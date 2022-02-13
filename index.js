import express from 'express';
import axios from 'axios'


let platformArray = []

const bulkPlaforms = async () => {
    const { data } = await axios.get('https://api.coingecko.com/api/v3/asset_platforms')
    return data
}

bulkPlaforms().then((data) => {
    platformArray = data
});




const app = express();


app.get('/api/v1/get-platform-assest', async (req, res) => {
    const { pageNumber } = req.query
    const page = pageNumber || 1
    const limit = 10
    let offset = (page - 1) * 10
    const assests = platformArray.slice(offset, offset + limit)
    res.status(200).json({
        page,
        data: assests,
        success: true,
        count: assests.length
    });
});

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log('App listening on port 5000');
});

