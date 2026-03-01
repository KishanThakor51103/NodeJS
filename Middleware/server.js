const express = require('express');
const app = express();
const PORT = 3000;
const authRoute = require('./routes/route1'); 
//in-build middleware
app.use(express.json());

//middleware for logging, auth, validation

const loggingMiddleware = function(req, res, next) {
    console.log('Logging Middleware run here');
    res.send('Lets go back from loggin middleware');
    // next();
}

const authMiddleware = function(req, res, next) {
    console.log('Auth middleware run here');
    next();
}

const validationMiddleware = function(req, res, next) {
    console.log('validation middleware run here');
    next();
}

//loading middleware into application
// app.use(loggingMiddleware);
// app.use(authMiddleware);
// app.use(validationMiddleware);

app.get('/',(req, res) => {
    console.log(req.body);
    res.send('Hello World from request');    
})

//Here i mounting the routes
app.use('/user',authRoute);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})