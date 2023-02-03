import express from 'express';
import {router} from "./src/routers/router";
import bodyParser from "body-parser";
import session from "express-session";
import {AppDataSource} from "./src/data-source";
import cors from 'cors';

const app = express();
AppDataSource.initialize().then(() => {
    console.log('Connect database success')
})
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('./public'));
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'somesecret',
    cookie: { maxAge: 100000 }}));
app.use('', router);

app.listen(3000, () => {
    console.log('Server is running at http://localhost:3000/home')
})