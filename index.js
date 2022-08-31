const express = require("express");


const cors = require("cors");

const app = express();

const videoRouter = require('./routes/videos')

app.use(cors());

app.get('/', (req, res) => {
    res.send("This server is up and running!")
})

app.use('/videos', videoRouter)

app.listen(8080, () => console.log("Running...."))
