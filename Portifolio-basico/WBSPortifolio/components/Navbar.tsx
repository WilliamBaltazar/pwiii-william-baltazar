// Importa o componente Link do Next.js para navegação.
import Link from 'next/link';

// Define o componente funcional Navbar.
export default function Navbar() {
  return (
    // 'nav' é a tag para a barra de navegação. As classes do Tailwind CSS definem:
    // "bg-blue-600": cor de fundo azul.
    // "text-white": cor do texto branca.
    // "p-4": preenchimento (padding) em todos os lados.
    <nav className="bg-blue-600 text-white p-4">
      {/*
        'ul' é uma lista não ordenada. As classes do Tailwind CSS definem:
        "flex": ativa o layout flexbox.
        "gap-4": adiciona um espaçamento entre os itens da lista.
      */}
      <ul className="flex gap-4">
        {/*
          Cada 'li' é um item da lista. O componente <Link> aponta para
          uma âncora (ID) na mesma página.
        */}
        <li><Link href="#sobre">Sobre</Link></li>      {/*  */}
        <li><Link href="#projetos">Projetos</Link></li>  {/*  */}
        <li><Link href="#contato">Contato</Link></li>    {/*  */}
      </ul>
    </nav>
  );
}