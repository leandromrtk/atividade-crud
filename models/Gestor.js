const mongoose = require('mongoose');

const gestorSchema = new mongoose.Schema({
    nome: {
        type: String,
        required: true
    },
    matricula: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Gestor', gestorSchema);
