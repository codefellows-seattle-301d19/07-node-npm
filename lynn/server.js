'use strict';

const express = require('express');
const bodyParser = require('body-parser').urlencoded({extended: true});
const PORT = process.env.PORT || 3000
const app = express();
app.use(express.static('./public'));
app.get('/', function(request, response){
  response.sendFile('public/vendor/new.html', {root: '.'});
});
app.post('/new', bodyParser, function(request, response) {
  console.log(request.body);
  response.send('Record posted to server!!');
});
app.listen(PORT, function() {
  console.log(`server is running on port:${PORT}`);
});
