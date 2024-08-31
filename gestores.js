const express = require('express');
const router = express.Router();
const Gestor = require('../models/Gestor');

// Criar uma nova aluna
router.post('/', async (req, res) => {
    const { nome, matricula } = req.body;
    const newGestor = new Gestor({ nome, matricula });
    await newGestor.save();
    res.json(newGestor);
});

// Listar todas as reclamações
router.get('/', async (req, res) => {
    const gestores = await Gestor.find();
    res.json(gestores);
});

// Atualizar uma reclamação
router.put('/:id', async (req, res) => {
    const { nome, matricula } = req.body;
    const updatedGestor = await Gestor.findByIdAndUpdate(req.params.id, { nome, matricula }, { new: true });
    res.json(updatedGestor);
});

// Deletar uma reclamação
router.delete('/:id', async (req, res) => {
    await gestor.findByIdAndDelete(req.params.id);
    res.json({ message: 'Comentário postado' });
});

module.exports = router;
