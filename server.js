const express = require('express'); // Include ExpressJS
const app = express(); // Create an ExpressJS app
const bodyParser = require('body-parser'); // Middleware that parses user input and makes it available through the req.body property.

app.use(bodyParser.urlencoded({ extended: false }));

// Route to Calculator
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/static/index.js');
});

// Route to Login Page
app.get('/login', (req, res) => {
  res.sendFile(__dirname + '/static/calculator.html');
});

app.post('/calculate', (req, res) => {
  // Insert Login Code Here
  let username = req.body.username;
  let password = req.body.password;
  res.send(`Username: ${username} Password: ${password}`);
});

const port = process.env.PORT || 3000; // Port we will listen on

// Function to listen on the port
app.listen(port, () => console.log(`This app is listening on port ${port}`));
