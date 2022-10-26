const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use('/css', express.static(path.join(__dirname, 'css')));

app.get('/', (req, res)=>{
    let styleName = "";
    const date = new Date();
    const hour = date.getHours();
    
    if(hour >= 6 && hour <= 17){
        styleName = "day.css";
    }else{
        styleName = "night.css";
    }

    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="css/${styleName}" rel="stylesheet">
        <title>Home</title>
    </head>
    <body>
    <form action='/result' method='POST'><label>Name</label><input type='text' name='name'>
    <label>Age</label><input type='text' name='age'><input type='submit' name='submit'></form>
    </body>
    </html>`);

});

app.post('/result', (req, res)=>{
    res.send(`Name: ${req.body.name} Age: ${req.body.age}`);

  });


app.listen(3000, ()=>{
    console.log('Listening to the post 3000');
});

