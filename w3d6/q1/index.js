const express = require("express");
const path = require("path");
const app = express();
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "view"));
app.use('/css', express.static(path.join(__dirname, 'css')));

//let time

app.get("/", (req, res) => {
  const date = new Date();
  let styleName = "";
  const hour = date.getHours();
    
    if(hour >= 6 && hour <= 17){
        styleName = "day.css";
    }else{
        styleName = "night.css";
    }

  res.render("index", {
    time: date.toTimeString(),
    styleName: styleName
  });
});
app.listen(3000);
