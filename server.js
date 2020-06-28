//server.js
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

app.get('/searchEnglish',  async (req, res) => {
    const url = `https://api.themoviedb.org/3/search/tv?api_key=d844b16c966a9e26944e63b71435e547&language=en-US&page=1&query=sherlock&include_adult=false`
    const ans = await fetch(url)
    const jayson = await ans.json()
    return res.json(jayson);
});

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});


app.listen(port);