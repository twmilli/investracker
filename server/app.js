import express from 'express';
import router from './router.js';

export const app = express();

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static('client/build'));
}

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(router);
