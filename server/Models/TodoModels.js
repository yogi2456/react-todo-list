import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    text: {
        type: String,
        require: true
    }
})

const TodoSchema = mongoose.model("todos", todoSchema);

export default TodoSchema;