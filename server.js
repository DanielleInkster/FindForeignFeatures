//server.js
require('dotenv').config();
const express = require('express');
const favicon = require('express-favicon');
const fetch = require('node-fetch')
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();

app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));

app.use(express.static(path.join(__dirname, 'build')));

app.get('/fetchMedia/:mediaType/:value',  async (req, res) => {
    const mediaType = req.params.mediaType
    const value = req.params.value
    const mediaUrl = `https://api.themoviedb.org/3/search/${mediaType}?api_key=${process.env.REACT_APP_DB_API_KEY}&language=en-US&page=1&query=${value}&include_adult=false`
    const data = await fetch(mediaUrl)
    const returnData = await data.json()
    return res.json(returnData);
});

app.get('/fetchKeywords/:mediaType/:id', async (req, res) => {
    const mediaType = req.params.mediaType
    const id = req.params.id
    const keywordsUrl = `https://api.themoviedb.org/3/${mediaType}/${id}/keywords?api_key=${process.env.REACT_APP_DB_API_KEY}`
    const data = await fetch(keywordsUrl)
    const returnData = await data.json()
    return res.json(returnData);
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(port);