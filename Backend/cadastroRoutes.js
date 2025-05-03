const express = require('express');
const router = express.Router();
const db = require('./db');

router.post('/cadastro', (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  }

  const query = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
  db.run(query, [nome, email, senha], function (err) {
    if (err) {
      if (err.message.includes('UNIQUE constraint failed: usuarios.email')) {
        return res.status(409).json({ error: 'E-mail já cadastrado.' });
      }
      return res.status(500).json({ error: 'Erro ao cadastrar usuário.' });
    }

    res.status(201).json({ message: 'Usuário cadastrado com sucesso!', id: this.lastID });
  });
});

module.exports = router;
