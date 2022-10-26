const express = require('express');
const app = express();
const path = require("path");


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, "view"));

app.use(express.json());
app.use('/js', express.static(path.join(__dirname, 'view', 'js')));

const items = [ "It is Certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes",
"Most likely", "Outlook good", "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later",
"Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it",
"My reply is no", "My sources say no", "Outlook not so good", "Very doubtful" ];

app.get("/", (req, res)=>{
   
  res.render("question");
});

app.post("/add", (req, res)=>{
  
   console.log(req.body);
   //const getData = req.body;
   const showData = items[Math.floor(Math.random(0, 1) * items.length)];
      
   res.send(showData);
  
});

app.listen(3000, ()=>{

  console.log("Listening to the 3000");
});