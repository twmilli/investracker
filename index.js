require('babel-register');
const app = require('./server/app').app;
const express = require('express');

app.set('port', (process.env.PORT || 3001));

if (process.env.NODE_ENV === 'production') {
  app.use('/', express.static('client/build'));
}

app.listen(app.get('port'), () => {
  console.log('listening on port ' + app.get('port'));
});
