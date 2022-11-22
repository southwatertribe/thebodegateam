var express = require('express');
var app = express();
//var bodyParser = require('body-parser');
//var multer = require('multer');
//var upload = multer(); 
//var session = require('express-session');
//var cookieParser = require('cookie-parser');
const path = require('path')



var Users = [];

app.use(express.static('./files'))

app.get('/signup', function(req, res){
    res.sendFile(path.resolve(__dirname,'./signup.html'))
});
app.get('/location',function(req,res){
  res.sendFile(path.resolve(__dirname,'./location.html'))
} )

app.post('/signup', function(req, res){
  if(!req.body.id || !req.body.password){
     res.status("400");
     res.send("Invalid details!");
  } else {
     Users.filter(function(user){
        if(user.id === req.body.id){
           res.render('signup', {
              message: "User Already Exists! Login or choose another user id"});
        }
     });
     var newUser = {id: req.body.id, password: req.body.password};
     Users.push(newUser);
     req.session.user = newUser;
     res.redirect('/protected_page');
  }
});

app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people })
})


app.get('/', (req, res) => {
  console.log('home page')
});
app.get('/login', (req, res) => {
  console.log('login page')
});

app.post('/login', (req, res) => {
  const { name } = req.body
  if (name) {
    return res.status(200).send(`Welcome ${name}`)
  }

  res.status(401).send('Please Provide Credentials')
})


app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})


  