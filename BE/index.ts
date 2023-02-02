import express from 'express';
// import {router} from "./src/routes/router";
const app = express();
import session from 'express-session'
import bodyParser from "body-parser";
import cors from "cors";
import {AppDataSource} from "./src/data-source";
AppDataSource.initialize().then(()=>{
    console.log('DB connect')
}).catch(err=>{
    console.log('Connect Err', err.message)
})
app.use(session({
    resave: true,
    saveUninitialized: true,
    secret: 'Dai',
    cookie: { maxAge: 60000 }}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
app.use(cors())
// app.use('', router);
app.listen(3000,()=>{
    console.log('server is running http://localhost:3000/home')
})

