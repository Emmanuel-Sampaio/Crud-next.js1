export const handleSubmit = async (nome, email, senha) => {
    const res = await fetch('http://localhost:3001/api/cadastro', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ nome, email, senha }),
    });

    const data = await res.json();
    alert(data.message);
};
