//jshint esversion:6
const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({extended:true}))

app.set("view engine", "ejs");

app.get("/", function (req, res) {

  let today = new Date();

  let options = {
    weekday: 'long',
    day: 'numeric',
    month:'long'
  }
  let day = today.toLocaleDateString("en-US", options);

  res.render("list", { kindOfDay: day });
});

app.post("/", function(req,res){
  console.log(req.body.newItem);
})

console.log("test")
app.listen(3000, function () {
  console.log("Server started on port 3000.");
});
