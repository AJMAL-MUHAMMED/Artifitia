import mongoose from "mongoose"

const todoSchema = mongoose.Schema({
    todo: {
        type: String,
        required: [true, 'Please enter any todo.']
    }
}, {
    timestamps: true
})

export default mongoose.model('Todo', todoSchema)