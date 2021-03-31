console.log('server has started!');

// const { request, response } = require('express');
var express = require('express');

var app = express();

// app.get('/api', (request, response) => {
//     response.send('Hello World');
// });

var server = app.listen(3000, listening());

function listening() {
    console.log('listening...');
}
app.use(express.static('www'));
