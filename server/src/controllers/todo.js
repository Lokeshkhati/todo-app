
import { Todo, } from '../models/todo.js'
import { CustomError } from '../utils/customError.js'

const createTodo = async (req, res, next) => {
    const { title, description, } = req.body
    if (!title || !description) {
        return next(new CustomError('Title and Description are required', 400))
    }
    const todo = new Todo({ user: req.user.id, title, description })
    await todo.save()

    res.status(200).json({ success: true, todo })
}
const getTodos = async (req, res, next) => {
    try {
        // storedTodos(req.user.id)
        const todos = await Todo.find({})
        if (!todos) {
            return next(new CustomError('todos not found', 400))
        }
        res.status(200).json({ success: true, todos })
    } catch (error) {
        return next(new CustomError(error, 500))
    }
}
const getTodoById = async (req, res, next) => {
    try {
        const todo = await Todo.findById(req.params.id)
        if (!todo) {
            return next(new CustomError('todo not found', 400))
        }

        res.status(200).json({ success: true, todo })
    } catch (error) {
        return next(new CustomError(error, 500))
    }
}

const updateTodo = async (req, res, next) => {
    try {
        const { title, description } = req.body

        if (!title || !description) {
            return next(new CustomError('Please provide all values', 400))
        }
        const todo = await Todo.findOne({ _id: req.params.id })
        if (!todo) {
            return next(new CustomError('todo not found', 400))
        }
        //TODO :  check permissions
        const updatedTodo = await Todo.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })

        res.status(200).json({ success: true, updatedTodo })

    } catch (error) {
        return next(new CustomError(error.message, 500))
    }
}
const deleteTodo = async (req, res, next) => {
    try {
        const todo = await Todo.findOne({ _id: req.params.id })
        if (!todo) {
            return next(new CustomError('todo not found', 400))
        }
        //TODO :  checkPermissions
        await todo.deleteOne()
        res.json({ success: true, message: "Deleted a todo" })
    } catch (error) {
        return next(new CustomError(error.message, 500))
    }
}
const toggleTodo = async (req, res, next) => {
    try {
        const todo = await Todo.findOne({ _id: req.params.id })
        if (!todo) {
            return next(new CustomError('todo not found', 400))
        }
        //TODO :  checkPermissions
        todo.completed = !todo.completed
        await todo.save()
        res.json({ success: true, message: "Todo toggled successfully" })
    } catch (error) {
        return next(new CustomError(error.message, 500))
    }
}
const changeBgColor = async (req, res, next) => {
    try {
        const { bgColor } = req.body
        console.log('bgColor from server: ', bgColor);
        const todo = await Todo.updateOne({ _id: req.params.id }, { $set: { bgColor } })

        if (!todo) {
            return next(new CustomError('todo not found', 400))
        }
        res.status(200).json({ success: true, message: "Todo bgColor updated successfully" })

    } catch (error) {
        return next(new CustomError(error, 500))
    }
}
export { createTodo, getTodos, getTodoById, updateTodo, deleteTodo, toggleTodo, changeBgColor }

