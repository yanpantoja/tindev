//const { Schema } é a mesma coisa que const mongoose -> mongoose.Schema

const { Schema, model } = require('mongoose'); // { } é uma desestruturação

const DevSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    user: {
        type: String,
        required: true,
    },
    bio: String,
    avatar: {
        type: String,
        required: true,
    },
    likes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
    dislikes: [{
        type: Schema.Types.ObjectId,
        ref: 'Dev',
    }],
}, {
    timestamps: true, //cria colunas createdAt, updatedAt
});

module.exports = model('Dev', DevSchema);