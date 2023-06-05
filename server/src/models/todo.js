import mongoose from 'mongoose';
import { todosData } from "../utils/todosData.js"

const todoSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a title"],
        trim: true,
    },
    description: {
        type: String,
        required: [true, "Please provide description"],
        trim: true,
    },
    completed: {
        type: Boolean,
        default: false
    },
    tags: [{ type: String }]
    ,
    bgColor: { type: String },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: "User"
    }
}, {
    timestamps: true
})

console.log(todosData)

const Todo = mongoose.model('Todo', todoSchema)

// async function storedTodos(user) {
//     try {
//         todosData.forEach(async (todo) => {
//             await Todo.create({ user, title: todo.title, description: todo.description })
//         });
//     } catch (error) {
//         console.log("Error saving Todos to db!");
//     }
// }

// storedTodos()
export { Todo } 