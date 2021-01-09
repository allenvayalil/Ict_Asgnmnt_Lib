const express =require("express");
const authorRouter=express.Router();
function router(nav){
    var authors=
[
{
   
    author:'J.K Rowling',
    img:'harry1.jpg'
},
{
    
    author:'J.R.R Tolkien',
    img:'hobit1.jpg'
},
{
    author:'Enid Blyton',
    img:'famous1.jpg'
},
{
    author:'Suzzane Collins',
    img:'hunger1.jpg'
}
]

authorRouter.get("/",function(req,res){
    res.render("authors",
    {
      nav,
      title:'Authors',
      authors
    });
});

authorRouter.get("/:id",function(req,res){
    const id=req.params.id;
    res.render("author",
    {
      nav,
      title:authors[id].author,
      author:authors[id]
    });
});

return authorRouter;

}


module.exports=router;