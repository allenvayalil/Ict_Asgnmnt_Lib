const express =require("express");
const signupRouter=express.Router();
const bodyParser = require('body-parser')
const { check, validationResult } = require('express-validator')
const urlencodedParser = bodyParser.urlencoded({ extended: false })
function router(nav){
    

signupRouter.get("/",function(req,res){
    res.render("signup",
    {
      nav,
      title:'Sign Up',
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


signupRouter.post('/', urlencodedParser, [
    check('username', 'This username must me 3+ characters long')
        .exists()
        .isLength({ min: 3 }),
    check('email', 'Email is not valid')
        .isEmail()
        .normalizeEmail()
], (req, res)=> {
    const errors = validationResult(req)
    if(!errors.isEmpty()) {
        // return res.status(422).jsonp(errors.array())
        const alert = errors.array()
        res.render('signup', {
            alert
        })
    }
})

return signupRouter;

}


module.exports=router;