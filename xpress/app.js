const express = require('express');
const app = express();

//app.post();
//app.put();
//app.delete();
app.get('/', (req, res)=>{
   res.send("Hello world"); 
});
app.get('/api/books', (req, res)=>{
    res.send([1,2,3,4,5,6]);
});
//PORT
const port = process.env.PORT || 3000;
app.listen(port, ()=>{
    console.log(`listening on port ${port}...`);
});