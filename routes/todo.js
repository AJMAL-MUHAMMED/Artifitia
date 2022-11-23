const router = require('express').Router()
const { createTodo, getTodos, editTodo, deleteTodo } = require('../controller/todo-controller');

router.get('/', getTodos)

router.post('/', createTodo)

router.put('/:id', editTodo)

router.delete('/:id', deleteTodo)

module.exports = router;