console.log("hello");
const express = require("express");
const app = express();
const port = 3000;

const posts = require("./posts")

app.use(express.static("public"));


app.get("/", (req, res) =>{
    res.send ("Server del mio blog")

})

app.get("/bacheca", (req, res) => {
 const bacheca = {
    posts: posts,
    count: posts.length
 }
     res.json(bacheca)

})

app.listen(port, () =>{
    console.log("Start")
});
