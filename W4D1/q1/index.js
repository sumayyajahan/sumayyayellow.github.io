const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const path = require("path");
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "view"));

app.use(cookieParser());
app.use(express.urlencoded({extended:false}));

app.get('/', (req, res) => {
    //res.send("Hello");
    const data = req.cookies;
    console.log(data);
    res.render('form', {data: data});
}) 
app.post('/', (req,res)=>{
    res.cookie(req.body.key, req.body.value);
    res.redirect('/');
});

app.listen(3000, () => console.log(`server running on 3000`));