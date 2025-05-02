import './globals.css';
import Link from 'next/link';




export default function Home() {
  return (
    <div className="forms">
      <input type="email" placeholder="insira seu email" name="email" id="email" />
      <input type="password"  placeholder ="insira sua senha" name="senha"  id="senha" />
      <button className="button">Login</button>
      <p>ainda não tem cadastro? {' '}
        <Link href="/cadastro" className="text-blue-500 hover:underline">
          cadastre-se
        </Link>
      </p>
   
    </div>
   
  );
}
