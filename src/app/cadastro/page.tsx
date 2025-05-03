'use client';  // Adicione esta linha no topo do seu arquivo

import React, { useState } from 'react';
import './cadastro.css';
import { handleSubmit } from '../../../Backend/script';  // Importando a função handleSubmit

export default function Cadastro() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');

    const handleClick = () => {
        handleSubmit(nome, email, senha);  // Passando os valores de estado para a função
    };

    return (
        <div className="teste">
            <h1>Informe seu login e senha para cadastro</h1>
            <input 
                type="text" 
                placeholder="informe seu nome" 
                name="enome" 
                value={nome} 
                onChange={(e) => setNome(e.target.value)} 
            />
            <input 
                type="email" 
                placeholder="informe email para cadastro" 
                name="ecadastro" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
            />
            <input 
                type="password" 
                placeholder="informe sua senha para cadastro" 
                name="scadastro" 
                value={senha} 
                onChange={(e) => setSenha(e.target.value)} 
            />
            <button onClick={handleClick}>Cadastrar</button>
        </div>
    );
}
