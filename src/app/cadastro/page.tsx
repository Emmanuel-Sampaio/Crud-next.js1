import './cadastro.css'

export default function Cadastro(){
    return (
        <div className="teste">
            <h1>Informe seu login e senha para cadastro</h1>
            <input type="email" placeholder='informe email para cadastro' name="ecadastro" />
            <input type="password" placeholder='informe sua senha para cadastro' name="scadastro" />
            <button>Cadastrar</button>
        </div>

    );
}
