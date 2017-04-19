import express from 'express';
import router from './router.js';
export const app = express();
import {
    Server
} from 'http';
const http = Server(app);


app.disable('x-powered-by');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "http://localhost:3000");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.header("Access-Control-Allow-Credentials", true);
  next();
});

app.use(router);
