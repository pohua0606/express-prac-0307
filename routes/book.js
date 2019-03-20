var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
    res.send('book');
})
    
router.get('/user',function(req,res){
    res.send('user');
})

router.get('/list',function(req,res){
    res.send('list');
})

module.exports = router ;
