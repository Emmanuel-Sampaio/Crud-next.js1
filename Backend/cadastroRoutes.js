const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();
const db = require('./db');

router.post('/cadastro', async (req, res) => {
  const { nome, email, senha } = req.body;

  if (!nome || !email || !senha) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios.' });
  }

  try {
    // Gerar o hash da senha
    const saltRounds = 10; // número de rounds para o salt
    const hashedPassword = await bcrypt.hash(senha, saltRounds);
    
    // Verificar se o hash foi gerado corretamente
    console.log('Senha criptografada:', hashedPassword);

    const query = 'INSERT INTO usuarios (nome, email, senha) VALUES (?, ?, ?)';
    db.run(query, [nome, email, hashedPassword], function (err) {
      if (err) {
        if (err.message.includes('UNIQUE constraint failed: usuarios.email')) {
          return res.status(409).json({ error: 'E-mail já cadastrado.' });
        }
        return res.status(500).json({ error: 'Erro ao cadastrar usuário.' });
      }

      res.status(201).json({ message: 'Usuário cadastrado com sucesso!', id: this.lastID });
    });
  } catch (error) {
    console.error('Erro ao criptografar a senha:', error);
    res.status(500).json({ error: 'Erro ao criptografar a senha.' });
  }
});

module.exports = router;
