//server.js
require('dotenv').config();
const express = require('express');
const favicon = require('express-favicon');
const originalFetch = require('node-fetch')
const fetch = require('fetch-retry')(originalFetch);
const path = require('path');
const port = process.env.PORT || 3000;
const app = express();

app.use(favicon(__dirname + '/build/favicon.ico'));
// the __dirname is the current directory from where the script is running
app.use(express.static(__dirname));

app.use(express.static(path.join(__dirname, 'build')));

app.get('/fetchMedia/:mediaType/:value',  async (req, res, next) => {
    try {
        const mediaType = req.params.mediaType
        const value = req.params.value
        const mediaUrl = `https://api.themoviedb.org/3/search/${mediaType}?api_key=${process.env.REACT_APP_DB_API_KEY}&language=en-US&page=1&query=${value}&include_adult=false`
        const data = await fetch(mediaUrl, {
            retries: 3,
            retryDelay: 200
        })
        const returnData = await data.json()
        return res.json(returnData);
        
    } catch (err) {
        next(err);
    }
});

app.get('/fetchKeywords/:mediaType/:id', async (req, res, next) => {
    try {
        const mediaType = req.params.mediaType
        const id = req.params.id
        const keywordsUrl = `https://api.themoviedb.org/3/${mediaType}/${id}/keywords?api_key=${process.env.REACT_APP_DB_API_KEY}`
        const data = await fetch(keywordsUrl)
        const returnData = await data.json()
        return res.json(returnData);
    } catch (err) {
        next(err);
    }
});

app.get('/fetchKeywordRecs/:mediaType/:keywordId/:pageNumber', async (req, res, next) => {
    try {
        const mediaType = req.params.mediaType
        const keywordId = req.params.keywordId
        const pageNumber = req.params.pageNumber
        const keywordRecsUrl = `https://api.themoviedb.org/3/discover/${mediaType}?api_key=${process.env.REACT_APP_DB_API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=${pageNumber}&with_keywords=${keywordId}`
        const data = await fetch(keywordRecsUrl)
        const returnData = await data.json()
        return res.json(returnData);
    } catch (err) {
        next(err);
    }
});

app.get('/fetchMoreInfo/:title/:year', async (req, res, next) => {
    try {
        const title = req.params.title
        const year = req.params.year
        const moreInfoUrl = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_DB_API_KEY2}&t=${title}&y=${year}&plot=full`
        const data = await fetch(moreInfoUrl, {
            retries: 3,
            retryDelay: 200
        })
        const returnData = await data.json()
        return res.json(returnData);
    } catch (err) {
        next(err);
    }
});

app.get('/fetchTMDBInfo/:mediaType/:itemId', async (req, res, next) => {
    try{
        const mediaType = req.params.mediaType
        const itemId = req.params.itemId
        const tmdbUrl = `https://api.themoviedb.org/3/${mediaType}/${itemId}?api_key=${process.env.REACT_APP_DB_API_KEY}&language=en-US`
        const data = await fetch(tmdbUrl)
        const returnData = await data.json()
        return res.json(returnData);
    } catch (err) {
        next(err);
    }
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(port);