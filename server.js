const express = require('express');
const path = require('path');

const app = express();


app.use(express.static(__dirname + '/wedding-card'));

app.get('*', function(req, res){
    res.send(path.join(__dirname+'/wedding-card/index.html'))
});

app.listen(process.env.PORT || 8080);