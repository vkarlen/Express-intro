const express = require('express');
//console.log(express);

// Create our app
const app = express();

// listen for network requests
// app.listen(port#, function)
app.listen(3000, function () {
  // when the server is ready
  // call this function
  console.log('*hacker voice* Im in');
});
