const mongoose = require('mongoose');

const alunoSchema = new mongoose.Schema({
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
    },
    notas: {
        type: Number,
        required: true
    },
});

module.exports = mongoose.model('Aluno', alunoSchema);
