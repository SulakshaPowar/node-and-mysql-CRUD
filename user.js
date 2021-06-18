const jwt = require("jsonwebtoken");

module.exports={
    validateRegister:(req, res, next) => {
        
        //username min length.
        if(!req.body.username || req.body.username.length<3) {
            return res.status(400).send({
                message: "Please enter the username with minimum 3 characters"
        });
    }

    //password min 6 characters.
    if(!req.body.password || req.body.password.length <6) {
        return res.status(400).send({
                message:"Please enter password with minimum of 6 characters"
        });
    }
    //password repeat
    if(!req.body.password_repeat || req.body.password != req.body.password_repeat) {
        return res.status(400).send({
                message:"Password does'nt match",
        });
    }
    next();
},
isLoggedIn: (req, res, next) => {
    if(!req.headers.authorization){
        return res.status(401).send({
        message: "Your session is not valid!",
        });
    }
    try{
        const authHeader = req.headers.authorization;
        const token = authHeader.split(" ")[1];
        const decoded = jwt.verify(token, 'SECRETKEY');
        req.userData = decoded;
        next();
    } catch(err){
        return res.status(400).send({
            message: "Your session is not valid!",
        });
    }
},
// validateProduct:(req, res, next) => {
        
//     //product_name min length.
//     if(!req.body.product_name || req.body.product_name.length<3) {
//         return res.status(400).send({
//             message: "Please enter the product_name with minimum 3 characters"
//     });
// }

// //description min 21 characters.
// if(!req.body.description || req.body.description.length <21) {
//     return res.status(400).send({
//             message:"Please enter description with minimum of 21 characters"
//     });
// }
// next();
// },


}