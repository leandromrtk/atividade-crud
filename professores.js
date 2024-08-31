const express = require('express');
const router = express.Router();
const Professor = require('../models/Professor');

// Criar uma nova reclamação
router.post('/', async (req, res) => {
    const { title, message } = req.body;
    const newProfessor = new Professor({ nome, matricula });
    await newComplaint.save();
    res.json(newComplaint);
});

// Listar todas os professores
router.get('/', async (req, res) => {
    const professores = await Professor.find();
    res.json(professores);
});

// Atualizar uma reclamação
router.put('/:id', async (req, res) => {
    const { nome, matricula } = req.body;
    const updatedProfessor = await Professor.findByIdAndUpdate(req.params.id, { nome, matricula }, { new: true });
    res.json(updatedProfessor);
});

// Deletar uma reclamação
router.delete('/:id', async (req, res) => {
    await Professor.findByIdAndDelete(req.params.id);
    res.json({ message: 'Professor faltou!' });
});

module.exports = router;
