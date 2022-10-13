// import dependencies
const bodyParser = require('body-parser');
const logger = require('./logger/logger')
const express = require('express');
const app = express();
const port = 3000;

app.use(bodyParser.json());

// array of users
const users = [{
  firstName: 'ismat',
  lastName: 'farjana',
  userName: 'dipty'
}]

// routes
app.get('/', (req, res) => {
  res.send("App is running on port 3000!");
})


// All users
app.get('/users', (req, res) => {
  res.json(users)
})
// Get all users by user name
app.get('/users/:userName', (req, res) => {
  const { userName } = req.params
  const user = users.find((user) => {
    if (userName === user.userName) {
      return user
    };
  });
  res.json(user)
});

// Post user
app.post('/user', (req, res) => {
  users.push(req.body);
  res.json(users);
});

// listen
app.listen(port, (err) => {
  console.log("App is running on 3000!");
});

logger.info("running server from the port:::::" + port)


