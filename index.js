const express = require('express');
//similar to import express from 'express';
const shortid = require('shortid');
const server = express();

let hubs = [];
let lesson = [];


server.use(express.json());

server.get("/", (req, res) => {
    res.status(200).json({ api: "running..."});
})

server.get("/hello", (req, res) => {
    res.status(200).json({ hello: "Web 27"});

})
server.get("/api/lesson", (req, res) => {
    res.status(200).json({ lesson });

})

server.post("/api/hubs", (req, res) => {
    //axios.post(/api/hubs, data) <-- the data shows up as the req.body on the server // from client application
    
    const hubInfo = req.body; 
    
    //validate that the hubInfo is correct before saving
    hubInfo.id = shortid.generate();

    hubs.push(hubInfo);

    res.status(201).json(hubInfo);

})

server.post("/api/lesson", (req, res) => {
    const lessonInfo = req.body;
    lessonInfo.id = shortid.generate();
    lesson.push(lessonInfo);

    res.status(201).json(lessonInfo);


})


const PORT = 5000;
server.listen(PORT, () =>  console.log(`\n ** API on running on http://localhost:${PORT}**\n`));


//to run server use node index.js