var express = require('express');
var app = express();

app.use(express.static('app_client'))
app.use(express.static('js'))

app.get('/', function(req,res,next){
    res.sendFile('index.html', {
        root: __dirname
    });
});

app.listen(3000,function(){
    console.log('listening on 3000')
})