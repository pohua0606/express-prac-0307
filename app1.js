var express = require('express');
var app = express();

app.get('/user/profile-edit',function(req,res){
    res.send('profile-edit');
})

app.get('/user/photo',function(req,res){
    res.send('photo');
})

app.listen(3000);