var express = require('express');
app = express();

app.get('/', function (req, res) {
  res.send('Hello World!\n');
});

app.listen(8080, function () {
  console.log('New Version Example app listening on port 8080!');
});

