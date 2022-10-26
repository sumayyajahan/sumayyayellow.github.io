const express = require('express');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.get('/', (req, res)=>{
    res.send(`<form action='/result' method='POST'><label>Name</label><input type='text' name='name'>
    <label>Age</label><input type='text' name='age'><input type='submit' name='submit'></form>`);

});


app.post('/result', (req, res)=>{
  res.send(`Name: ${req.body.name} Age: ${req.body.age}`);
});

app.listen(3000, ()=>{
    console.log('Listening to the post 3000');
});

