// import dependencies
const express = require('express');
const logger = require('../logger/logger')

const app = express();

// array of users
const users = [{
  firstName: 'ismat',
  lastName: 'farjana',
  userName: 'dipty'
},
{
  firstName: 'ishrat',
  lastName: 'farjana',
  userName: 'supty'
}]

// GET all users
app.get('/users', (req, res) => {
  logger.info("All users route");
  res.json(users);
})


// Get all users by user name
app.get('/users/:userName', (req, res) => {
  const { userName } = req.params
  logger.info("filter users by users name:::::" + userName);
  const user = users.filter((user) => {
    if (userName === user.userName) {
      return user
    };
  });
  res.json(user)
});



// Post a user
app.post('/user', (req, res) => {
  users.push(req.body);
  res.json(users);
});

module.exports = app;