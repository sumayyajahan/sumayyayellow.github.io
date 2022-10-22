const express = require('express');

const app = express();

app.get('/', (req, res)=>{
    let name = req.query.name;
   res.send(`hello ${name}`);
});

app.listen(3000, ()=> {
    console.log(`server running on 3000`);
});

