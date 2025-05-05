'use client';
import './globals.css';
import Link from 'next/link';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const router = useRouter();

  const handleLogin = async () => {
    const res = await fetch('http://localhost:3001/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, senha }),
    });

    const data = await res.json();

    if (res.ok) {
      alert(data.message);
      localStorage.setItem('usuarioNome', data.nome);
      router.push('/Acesso');
    } else {
      alert(data.error);
    }
  };

  return (
    <div className="forms">
      <input
        type="email"
        placeholder="insira seu email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="insira sua senha"
        value={senha}
        onChange={(e) => setSenha(e.target.value)}
      />
      <button className="button" onClick={handleLogin}>Login</button>
      <p>
        ainda não tem cadastro?{' '}
        <Link href="/cadastro" className="text-blue-500 hover:underline">
          cadastre-se
        </Link>
      </p>
    </div>
  );
}
