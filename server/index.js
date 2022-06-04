const express = require("express");

const port = process.env.PORT;
require("dotenv").config();
const axios = require('axios');
const path = require('path');
//payload.data
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, '../dist')));
app.use('/api/*', async (req, res) => {

  try {
    const payload = await axios({
      method: req.method.toLowerCase(),
      url: 'https://app-hrsei-api.herokuapp.com/api/fec2/hr-rfc/' + req.params[0],
      headers: { authorization: process.env.API_KEY },
      data: req.body,
      params: req.query,
    });
    res.send(payload.data);
  } catch (error) {
    console.log(error.response);
  }
});

app.get('*', function(req, res) {
  res.sendFile('index.html', {
    root: path.join(__dirname, '../dist/'),
  });
});

app.listen(process.env.PORT, () => {
  console.log(`listening on Port: ${process.env.PORT}`);
});