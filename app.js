const { static } = require("express");
const express =require("express");
const bodyParser = require('body-parser')
const { check, validationResult } = require('express-validator')
const nav =
[
  {
    link:'/books',name:'Books'
  },
  {
    link:'/authors',name:'Authors'
  },
  {
    link:'/login',name:'Login'
  },
  {
    link:'/signup',name:'Signup'
  },
  {
    link:'/addbook',name:'Add New'
  }
];
const booksRouter=require('./src/routes/bookRouter')(nav);
const authorRouter=require('./src/routes/authorRouter')(nav);
const loginRouter=require('./src/routes/loginRouter')(nav);
const signupRouter=require('./src/routes/signupRouter')(nav);
const addbookRouter=require('./src/routes/addbookRouter')(nav);
const app=new express;


app.use(express.static("./public"));
app.set("view engine","ejs");
const urlencodedParser = bodyParser.urlencoded({ extended: false })

app.set("views","./src/views");
app.use('/books',booksRouter);
app.use('/authors',authorRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/addbook',addbookRouter);

app.get("/",function(req,res){
    res.render("index",
    {
      nav,
      title:'Library'
    });
});



app.listen(4500);
console.log("local host is 4500");