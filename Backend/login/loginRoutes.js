const express = require('express');
const router = express.Router();

const db = require('../db');

router.post('/login', (req, res) => {
    const { email, senha } = req.body;
  
    if (!email || !senha) {
      return res.status(400).json({ error: 'Email e senha são obrigatórios.' });
    }
  
    const query = 'SELECT * FROM usuarios WHERE email = ? AND senha = ?';
    db.get(query, [email, senha], (err, row) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
  
      if (row) {
        return res.status(200).json({ message: 'Login realizado com sucesso!' });
      } else {
        return res.status(401).json({ error: 'Usuário não cadastrado.' });
      }
    });
  });
  