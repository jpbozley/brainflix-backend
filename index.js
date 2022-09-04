const express = require("express");

const cors = require("cors");

const app = express();

const videoRouter = require('./routes/videos')

require("dotenv").config();

app.use('/static', express.static('./public/images'));

app.use(cors());

let port = process.env.PORT;

app.get('/', (req, res) => {
    res.send("This server is up and running!")
})

app.use('/videos', videoRouter)

//When subbing in 'port' for 8080, it throws errors even though console.logging it gets me 8080. Why?

app.listen(8080, () => console.log("Running...."))
