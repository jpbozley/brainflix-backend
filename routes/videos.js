const express = require("express");

const router = express.Router();

const videosData = require('../data/videos-data.json')

const videosSimple = require('../data/videos.json')




router.get('/', (req, res) => {
    res.send(videosSimple)
})


router.get('/:id', (req, res) => {
    res.send(videosData.find((obj) => {
        // return obj.id === req
        return obj.id === `${req.params.id}`

    }))
})

//new stuff below
router.post('/', (req, res) => {

    const newVidSimple = {
        title: "testing",
        channel: "John",
        image: "https://i.imgur.com/5qyCZrD.jpg",
        id: "4"
    }

    const newVid = {
        title: "Test Video",
        channel: "John",
        image: "https://i.imgur.com/5qyCZrD.jpg",
        id: "4",
        description: "This is a test video",
        views: `100`,
        likes: `100`,
        duration: "3:00",
        timestamp: "1630656720000",
        comments: [],

    }
    videosSimple.push(newVidSimple);
    videosData.push(newVid);
    res.json(newVidSimple);
})


//end new stuff
module.exports = router;