import express from 'express';
import dotenv from 'dotenv';
import actorRouter from './routes/actorRouter.js';

dotenv.config();

const app = express();

app.use('/actor', actorRouter);

const port = 3030

app.use(express.json());

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})