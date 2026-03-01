const express = require('express');
const router = express.Router();

//middleware that is specific to this router
const auth = function(req, res, next) {
    console.log(`I'm inside auth middleware`);
    // let's add dummy user
    const user = req.body;

    console.log(user);
    if(user)
    {
        //if a valid user is there in req, then proceed to next middleware
        next();
    } else {
        //if not a valid user
        res.json({
            success : false,
            message : 'Not a valid user'
        })
    }
}


const isStudent = function(req, res, next) {
    console.log(`I'm in isStudnet middleware`);
    if(req.body.role === 'student') {
        next();
    } else {
        res.json({
            success : false,
            message : 'Access Denied, this route is only for student'
        })
    }
}


const isAdmin = function(req, res, next) {
    console.log(`I'm in isAdmin middleware`);
    if(req.body.role === 'admin') {
        next();
    } else {
        res.json({
            success : false,
            message : 'Access Denied, this route is only for admin'
        })
    }

}


router.get('/student',auth,isStudent,(req, res) => {
    console.log('I am in student route');
    res.send(`student specific page`);
});

router.get('/admin',auth,isAdmin,(req, res) => {
    console.log('I am in admin route');
    res.send(`admin specific page`);
})
module.exports = router;
