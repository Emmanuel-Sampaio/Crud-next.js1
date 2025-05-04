const express = require('express');
const bcrypt = require('bcrypt');
const router = express.Router();

const db = require('../db');

router.post('/login', (req, res) => {
    const { email, senha } = req.body;

    if (!email || !senha) {
        return res.status(400).json({ error: 'Email e senha são obrigatórios.' });
    }

    // Busca o usuário pelo email
    const query = 'SELECT * FROM usuarios WHERE email = ?';
    db.get(query, [email], (err, row) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }

        if (!row) {
            return res.status(401).json({ error: 'Usuário não encontrado.' });
        }

        // Compara a senha fornecida com a senha criptografada do banco
        bcrypt.compare(senha, row.senha, (err, result) => {
            if (err) {
                return res.status(500).json({ error: 'Erro ao verificar a senha.' });
            }

            if (result) {
                return res.status(200).json({ message: 'Login realizado com sucesso!' });
            } else {
                return res.status(401).json({ error: 'Senha incorreta.' });
            }
        });
    });
});

module.exports = router;
