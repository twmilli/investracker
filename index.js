require('babel-register');
const app = require('./server/app').app;

app.set('port', (process.env.PORT || 3001));

app.listen(app.get('port'), () => {
  console.log('listening on port ' + app.get('port'));
});
