'use strict';

// dependencies
const express = require('express');
const cors = require('cors');
const path = require('path');


// create an instance of express
const app = express();

//  to allow all cors origin
app.use(cors())

//serving index.html from clinet
app.use(express.static(path.join(__dirname + '/client')));


// error handling

// 404 errors
app.use((req, res, next) => {
  res.status(404).json({ message: 'Resource not found' });
});

// 500 errors
app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

// set the port to use
const port = 3000;

// start the server
const server = app.listen(port, () => {
  console.log(`App is running at: localhost:${server.address().port}`);
});