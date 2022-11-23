const Todo = require('../models/todo')


//@disc Create todo
//@api POST /api/todos
//@access Public
exports.createTodo =  async (req, res) => {
    if(!req.body.Todo){
        return res.status(400).json({message: 'Please enter a todo.'})
    }
    const data = await Todo.create({ todo: req.body.Todo })
    res.json({ data })
}

//@disc Get todos
//@api GET /api/todos
//@access Public
exports.getTodos = async (req, res) => {
    const data = await Todo.find()
    res.json({ data });
}

//@disc Edit todo
//@api PUT /api/todos/:id
//@access Public
exports.editTodo = async (req, res) => {
    const todo = await Todo.findById(req.params.id)
    if (!todo) {
        return res.status(400).json({message: 'Invalid id.'})
    }
    const updatedTodo = await Todo.findByIdAndUpdate(req.params.id, { todo: req.body.Todo })
    res.json({updatedTodo})
}

//@disc Delete todo
//@api DELETE /api/todos/:id
//@access Public
exports.deleteTodo =  async (req, res) => {
    const todo = await Todo.findById(req.params.id)
    if (!todo) {
        return res.status(400).json({message: 'Invalid id.'})
    }
    await todo.remove()
    res.json({message: 'Successfully deleted.'})

}