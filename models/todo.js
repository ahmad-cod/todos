const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const todoSchema = new Schema({
    _id: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    completed: {
        type: Boolean,
        default: false
    }
},
{ timestamps: true }
)

module.exports = mongoose.model('todo', todoSchema)