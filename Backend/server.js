const express = require('express');
const cors = require('cors');
const app = express();
const cadastroRoutes = require('./cadastroRoutes');  


app.use(cors());
app.use(express.json());
app.use('/api', cadastroRoutes);

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
