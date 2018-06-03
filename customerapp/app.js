var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');

var app = express();

/* var logger = function(req,res,next){
    console.log('Logging...');
    next();
}

app.use(logger); */

// View engine
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

// Set static parth
app.use(express.static(path.join(__dirname,'public')))

var users = [
    {
        id:1,
        first_name:'John',
        last_name:'Doe',
        email:'jd@gmail.com'
    },
    {
        id:2,
        first_name:'Mel',
        last_name:'Henny',
        email:'mh@gmail.com'
    },
    {
        id:2,
        first_name:'Tigre',
        last_name:'Boont',
        email:'tb@gmail.com'
    }
]

app.get('/',function(req,res){
    res.render('index', {
        title:'Customers',
        users:users
    });
});

app.post('/users/add', function(req,res){
    var newUser = {
        first_name:req.body.first_name,
        last_name:req.body.last_name,
        email:req.body.email
    }
    console.log(newUser);
});

app.listen(3000,function(){
    console.log('Server started on port 3000... ');
})
