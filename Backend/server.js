const express = require('express');
const cors = require('cors');
const app = express();

const cadastroRoutes = require('./cadastroRoutes');
const loginRoutes = require('./login/loginRoutes');

app.use(cors());
app.use(express.json());
app.use('/api', cadastroRoutes);
app.use('/api', loginRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
