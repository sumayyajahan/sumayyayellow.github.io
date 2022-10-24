const express = require('express');
const path = require("path");
const app = express();
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "view"));
app.use(express.urlencoded({ extended: false }));


app.get('/', (req, res)=>{
    res.render("form");

});

app.post("/result", (req, res)=>{
   const name = req.body.name;
   const age = req.body.age;

   res.render("show", {
    name: name,
    age: age
   });
});

app.listen(3000, ()=>{
    console.log('Listening to the post 3000');
});

