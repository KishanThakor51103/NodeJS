const fs = require('fs');
const os = require('os');

console.log(os.userInfo()); // Give the all information about user

fs.appendFile('log.txt','This is File from Practice\n',(err)=>{
    if(err) throw err;
    else console.log('append File successfully');
})





