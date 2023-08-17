var express = require('express')
var cors = require('cors')
var app = express()

app.use(cors())

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/user/:id", (req, res) => {
    // const q = req.params
    // console.log(q.id)
    const q = req.query
    console.log(q)
    res.send({'sound':q.name});
});

app.get("/sound/:name", (req, res) => {
    const { name } = req.params
    
    if (name == 'dog') {
        res.json({'sound' : 'walf walf'})
    } else if (name == 'cat') {
        res.json({'sound' : 'meao'})
    } else if (name == 'pig') {
        res.json({'sound' : 'oink'})
    } else {
        res.json({'sound':"no idea"})
    }
});

app.listen(3000);

 
