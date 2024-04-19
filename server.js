import dotenv from 'dotenv';
import express from 'express';
import { connectToMongoDb } from './src/database/dbConnection.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import { router } from './src/routes/route.js';


dotenv.config();

const app = express();

app.disable('x-powered-by'); //less hackers know about our stack

app.use('/api', router)

app.use(cors());
// Parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// Parse application/json
app.use(bodyParser.json());

if(connectToMongoDb){
    app.listen(process.env.PORT || 1111,()=>{
        console.log(`Server is running on PORT ${process.env.PORT}`);
    })
}

