var express = require('express');
var app = express();
var bodyParser = require('body-parser')


// static files
app.use(express.static('public'));

// 範本引擎

var engine = require('ejs-locals');
app.engine('ejs',engine);

app.set('views', './views');
app.set('view engine', 'ejs');

// body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false})); 

app.get('/search',function(req,res){
    // console.log(res);
    res.render('search');
})

app.post('/searchAJAX', function(req,res){
    res.send('hello');
})

//當使用者把東西傳送到後端伺服器得時候，這個路由可以接收到資料
app.post('/searchList',function(req,res){
    // console.log(req);
    // console.log(res);
    console.log(req.body.searchText);
    res.redirect('/search');
    res.end('end!');
})

var book = require('./routes/book');
app.use('/book_ritual',book);

// 監聽
var port = process.env.PORT || 3000 ;
app.listen(port);