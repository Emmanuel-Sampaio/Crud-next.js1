export const handleSubmit = async (nome, email, senha) => {
  try {
    const res = await fetch('http://localhost:3001/api/cadastro', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, email, senha }),
    });

    const data = await res.json();

    if (!res.ok) {
      // Se houver erro, mostrar a mensagem vinda do backend
      alert(data.error || 'Erro ao cadastrar.');
    } else {
      alert(data.message);
    }
  } catch (error) {
    alert('Erro na comunicação com o servidor.');
  }
};
