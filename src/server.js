const path = require('path');
const {existsSync} = require('fs');
var express = require('express');
var app = express();
app.use(express.static('src/web/html')); //__dir and not _dir
app.use(express.static(path.join(__dirname, 'web')));

var port = 28888; // you can use any port
console.log('server on ' + port);

app.all('*', function (req, res) {
    console.log(req.url);
    if (existsSync(path.join(__dirname, './web/html', req.url)))
      return res.sendFile(path.join(__dirname, './web/html', req.url));
})

app.listen(port);
