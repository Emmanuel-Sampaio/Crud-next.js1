
'use client';
import { useEffect, useState } from 'react';

export default function Acesso() {
    const [nome, setNome] = useState('');

    useEffect(() => {
        const nomeUsuario = localStorage.getItem('usuarioNome');
        if (nomeUsuario) {
            setNome(nomeUsuario);
        }
    }, []);

    return (
        <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <h1>Bem-vindo ao sistema crudd, {nome}!</h1>
        </div>
    );
}
