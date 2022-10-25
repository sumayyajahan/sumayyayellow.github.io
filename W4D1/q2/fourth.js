const express = require("express");
const path = require("path");
const session = require('express-session');
const app = express();

app.use(session({
  resave: false,
  saveUninitialized: false,
  secret: 'salt for cookie singing',
}));

app.use(express.urlencoded({ extended: false }));
app.use("/css", express.static(path.join(__dirname, "css")));

app.get("/", (req, res, next) => {
  

  res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Home</title>
    </head>
    <body>
    <form action='/result' method='POST'><label>Name</label><input type='text' name='name'>
    <label>Age</label><input type='text' name='age'><input type='submit' name='submit'></form>
    </body>
    </html>`);
});

app.post("/result", (req, res) => {
  //res.send(`Name: ${req.body.name} Age: ${req.body.age}`);
  req.session[req.body.name] = req.body.age; 
  
  res.redirect(303, `/output`);
});
app.get("/output", (req, res) => {

  let output = `<ul>`;
  for(let key in req.session){
    output += `<li>${key}${req.session[key]}</li>`;
  }
  output += `</ul>`;
  //let name = req.query.name;
  //let age = req.query.age;
  res.send(output);
});

app.listen(3000, () => {
  console.log("Listening to the post 3000");
});
