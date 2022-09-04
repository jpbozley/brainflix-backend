const express = require("express");

const router = express.Router();

const videosData = require('../data/videos-data.json')

const videosSimple = require('../data/videos.json')

const uuid = require('uuid')


router.use(express.json());

router.get('/', (req, res) => {
    res.send(videosSimple)
})


router.get('/:id', (req, res) => {
    res.send(videosData.find((obj) => {
        return obj.id === `${req.params.id}`

    }))
})



router.post('/', (req, res) => {
    let randomID = uuid.v4()
    const newVidSimple = {
        title: req.body.title,
        channel: "John",
        image: "http://localhost:8080/static/image9.jpeg",
        id: randomID

    }

    const newVid = {
        title: req.body.title,
        channel: "John",
        image: "http://localhost:8080/static/image9.jpeg",
        id: randomID,
        description: req.body.description,
        views: `100`,
        likes: `100`,
        duration: "3:00",
        timestamp: 1630656720000,
        comments: [
            {
                "name": "John Basedow",
                "comment": "This video stopped me from working on my biceps, triceps, and even abs.",
                "likes": 0,
                "timestamp": 1632227521000
            },
            {
                "name": "Tony Robbins",
                "comment": "This video is so inspiring.",
                "likes": 0,
                "timestamp": 1632227521000
            },
            {
                "name": "Jeff Lebowski",
                "comment": "This video is a bummer, man.",
                "likes": 0,
                "timestamp": 1632227521000
            }
        ],

    }
    videosSimple.push(newVidSimple);
    videosData.push(newVid);
})


module.exports = router;