const express =require("express");
const loginRouter=express.Router();
function router(nav){
    var books=
[
{
    title:"Harry Potter",
    author:'J.K Rowling',
    genre:'Fantasy',
    img:'harry.jpg'
},
{
    title:"The Hobbit",
    author:'J.R.R Tolkien',
    genre:'Horror',
    img:'hobit.jpg'
},
{
    title:"The Famous Five",
    author:'Enid Blyton',
    genre:'Family',
    img:'famous.jpg'
},
{
    title:"The Hunger Games",
    author:'Suzzane Collins',
    genre:'Peace',
    img:'hunger.jpg'
}
]

loginRouter.get("/",function(req,res){
    res.render("login",
    {
      nav,
      title:'Log In',
      books
    });
});

// booksRouter.get("/:id",function(req,res){
//     const id=req.params.id;
//     res.render("book",
//     {
//       nav,
//       title:books[id].title,
//       book:books[id]
//     });
// });

return loginRouter;

}


module.exports=router;