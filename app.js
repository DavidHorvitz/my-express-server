const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');
// const myLocation = require(`./src/modules/myLocation.js`);



// app.listen(3000, () => {
// console.log('Example app listening on port 3000!');
// });
// app.get('/', (req, res) => {
// res.send('Hello World!');
// });

// app.post(`/`,(req,res)=>{
//     res.send(`Hello post`);
// });
// app.get('/moshe', (req, res) => {
// res.send('Hello Moshe!');
// });
// app.get(`/david`,(req,res) =>{
//     res.send(`Hi my name is : David`)
// });
// 164 page 
app.listen(3000, () => {
    console.log('Example app listening on port 3000!');
});
app.get('/', (req, res) => {
    fs.createReadStream(path.join(__dirname, './src/static/index.html')).pipe(res);
});




