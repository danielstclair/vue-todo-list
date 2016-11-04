const express = require('express');
const router = express.Router();
const User = require('../models/user');
const Todo = require('../models/todo');

router.get('/user', (req, res, next) => {
  User.findOne({}, (err, doc) => {
    if (err) {
      return res.send('Error!');
    }
    res.send(doc);
  })
})

router.post('/user', (req, res, next) => {
  // This will later be taken out through req.body
  const user = new User({
    firstName: 'Daniel',
    lastName: 'St. Clair',
    email: 'danielallanstclair@gmail.com',
    password: 'admin'
  });
  user.save((err, result) => {
    console.log(result);
  });
});

router.get('/todos', (req, res, next) => {
  Todo.find({}, (err, doc) => {
    if (err) {
      console.log(err);
      return res.send('Error!');
    }
    res.send(doc);
  })
});

router.post('/todo', (req, res, next) => {
  const { content } = req.body;
  // This will later be taken out through req.body
  const user = '5818e60ba3c0e432ea8ea9d1';
  const completed = req.body.completed === 'false' ? false : true;
  const todo = new Todo({ content, completed, user });
  todo.save((err, result) => {
    if (err) {
      console.log(err);
      return res.send('Error!')
    }
    res.send(result);
  });
})



module.exports = router;
