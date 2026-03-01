const express = require('express');
const app = express();
const PORT = 3000;

//in-build middleware
app.use(express.json());

app.get('/',(req, res) => {
    console.log(req.body);
    res.send('Hello World from request');    
})


app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})

