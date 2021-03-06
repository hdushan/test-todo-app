'use strict'

const express = require('express');

const todoRoutes = express.Router();

const Todo = require('./Todo');

function calcDelay() {
  let d = Math.random();
  let delayAmount = 0;
  if (d < 0.5)
    delayAmount = 2000;
  else if (d < 0.7)
    delayAmount = 3000;
  else if (d < 0.9)
    delayAmount = 5000;
  else
    delayAmount = 500;

  return delayAmount;
}

todoRoutes.route('/all').get(function (req, res, next) {
  Todo.find(function (err, todos) {
    if (err) {
      return next(new Error(err));
    }
      setTimeout(() => res.json(todos), calcDelay());
  });
});

todoRoutes.route('/add').post(function (req, res) {
  Todo.create(
    {
      name: req.body.name,
      done: false
    },
    function (error, todo) {
      if (error) {
        res.status(400).send('Unable to create todo list');
      }
      let d = Math.random();
      if (d < 0.1) {
          res.status(418).send('Coffee does not belong in a teapot....')
      }else{
        res.status(200).json(todo);
      }
    }
  );
});


todoRoutes.route('/delete/:id').get(function (req, res, next) {
  const id = req.params.id
  Todo.findByIdAndRemove(id, function (err, todo) {
    if (err) {
      return next(new Error('Todo was not found'));
    }
      res.json('Successfully removed');
  });
});

// This route added to enable automated testing. Must not be included when running in production mode
if (process.env.ENVIRONMENT == "development") {
  todoRoutes.route('/reset').get(function (req, res, next) {
    const id = req.params.id
    Todo.deleteMany({}, function (err, todo) {
      if (err) {
        return next(new Error('Todo was not found'));
      }
        res.json('Test Instrumentation: Successfully removed all tasks');
    });
  });
}

todoRoutes.route('/update/:id').post(function (req, res, next) {
  const id = req.params.id;
  Todo.findById(id, function (error, todo) {
    if (error) {
      return next(new Error('Todo was not found'));
    } else {
      todo.name = req.body.name;
      todo.done = req.body.done;

      todo.save({
        function (error, todo) {
          if (error) {
            res.status(400).send('Unable to update todo');
          } else {
            setTimeout(() => res.status(200).json(todo), calcDelay());
          }
        }
      });
    }
  });
});

module.exports = todoRoutes;
