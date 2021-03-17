import express from 'express'

import morgan from 'morgan'

import dotenv from 'dotenv';
import productRouter from './routes/product.js'

const app = express();

dotenv.config();

app.use(morgan('dev'));

const port = process.env.PORT || 8000

app.listen(port, () => { console.log(`Server is running on port : ${port}`); })

app.use('/api', productRouter);