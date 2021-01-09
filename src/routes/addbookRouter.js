const express =require("express");
const addbookRouter=express.Router();
function router(nav){
//     var authors=
// [
// {
   
//     author:'J.K Rowling',
//     img:'harry1.jpg'
// },
// {
    
//     author:'J.R.R Tolkien',
//     img:'hobit1.jpg'
// },
// {
//     author:'Enid Blyton',
//     img:'famous1.jpg'
// },
// {
//     author:'Suzzane Collins',
//     img:'hunger1.jpg'
// }
// ]

addbookRouter.get("/",function(req,res){
    res.render("addbook",
    {
      nav,
      title:'Add New Book ',
      
    });
});


return addbookRouter;

}


module.exports=router;