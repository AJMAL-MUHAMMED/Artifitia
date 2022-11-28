// const router = require('express').Router()
import {Router } from 'express'
const router = Router()
import { createTodo, getTodos, editTodo, deleteTodo } from '../controller/todo-controller.js';

router.get('/', getTodos)

router.post('/', createTodo)

router.put('/:id', editTodo)

router.delete('/:id', deleteTodo)

export default router;