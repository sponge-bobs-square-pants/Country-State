const express = require('express')
const app = express();
const cors = require('cors');
require('dotenv').config();
const connectDB = require('./DB/ConnectDB');
const port = process.env.PORT || 6000
const country = require('./Models/countrySchema')
const state = require('./Models/stateSchema')
const city = require('./Models/citySchema')
// const countriesData = require('./Countries.json')
// const statesData = require('./States.json');
// const citiesData = require('./Cities.json');
const helmet = require('helmet')
app.use(express.json());
app.use(cors());
app.options('*', cors());
app.use(helmet());

app.get('/api/v1/Countries', async (req, res) =>{
    try {
        const Countries = await country.find();
        return res.status(200).json({Countries}) 
    } catch (error) {
        return res.status(500).json({error: `Internal Server Error ${error}`})
    }
})
app.get('/api/v1/State', async (req, res) => {
    try {
        const country_id = req.query.country_id;
        if (!country_id) {
            return res.status(400).json({ error: 'Missing country_id parameter' });
        }

        const countryIds = country_id.split(',').map(id => parseInt(id.trim()));
        // const uniqueStates = await state.distinct('name', { country_id: { $in: countryIds } });
        // console.log(uniqueStates);
        const states = await state.find({ country_id: { $in: countryIds } });
        const uniqueStateNames = new Set();

        // Filter out duplicate state names and keep the entire state object
        const uniqueStates = states.filter((state) => {
            if (!uniqueStateNames.has(state.name)) {
                uniqueStateNames.add(state.name);
                return true;
            }
            return false;
        });
        return res.status(200).json({ uniqueStates });
    } catch (error) {
        return res.status(500).json({ error: `Internal Server Error ${error}` });
    }
})
app.get('/api/v1/City', async (req, res) => {
    try {
        const {state_id} = req.query;
        if (!state_id) {
            return res.status(400).json({ error: 'Missing state_id parameter' });
        }
        const cities = await city.find({state_id: parseInt(state_id)})
        return res.status(200).json({ cities });
    } catch (error) {
        return res.status(500).json({ error: `Internal Server Error ${error}` });
    }
})
// const populateData = async () => {
//     const countryCount = await country.countDocuments();
//     if (countryCount === 0) {
//         await country.insertMany(countriesData);
//         await state.insertMany(statesData);
//         await city.insertMany(citiesData);
//     }
// };
// const createIndexes = async () => {
//     await country.createIndexes();
//     await state.createIndexes();
//     await city.createIndexes();
// };

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        // await populateData();
        // await createIndexes();
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}`);
        });
    } catch (error) {
        console.log(error);
    }
};
start();