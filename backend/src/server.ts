import discogsController from './discogsController';
const express = require('express');
const app = express();
const port = 3000;

app.get('/api', (req, res) => res.send('Hello World!'));
app.get("/api/discogs/:username", discogsController.getDiscogsUser);


app.listen(port, () => console.log(`Example app listening on port ${port}!`));