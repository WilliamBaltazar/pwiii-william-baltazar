/*
  O documento sugere importar 'Head' do 'next/head',
  mas no App Router (usado neste projeto), os metadados como <title>
  são geralmente gerenciados no arquivo 'layout.tsx'.
  A importação do Navbar também estava com um erro de digitação ("havbar").
*/
import Navbar from '../components/Navbar'; // O caminho foi ajustado para o padrão do projeto.

// Define a página principal da aplicação.
export default function Home() {
  return (
    // O fragmento <>...</> é usado para agrupar múltiplos elementos sem adicionar um nó extra ao DOM.
    <>
      {/* O componente Navbar é renderizado no topo da página. */}
      <Navbar />

      {/* 'main' é o contêiner principal do conteúdo da página. */}
      <main>
        {/*
          Seção "Sobre".
          'id="sobre"' permite que o link da Navbar role a página até aqui.
          As classes de Tailwind definem o preenchimento (padding).
        */}
        <section id="sobre" className="p-10">
          <h1 className="text-3xl font-bold">Olá! Eu sou WBS DevCompany</h1> {/*  */}
          <p className="mt-2 text-gray-700">Desenvolvedor em formação. Amo criar coisas com código!</p> {/*  */}
        </section>

        {/*
          Seção "Projetos".
          O fundo cinza claro ("bg-gray-100") ajuda a separar visualmente esta seção.
        */}
        <section id="projetos" className="bg-gray-100 p-10 rounded">
          <h2 className="text-2xl font-semibold mb-4">Meus Projetos</h2> {/*  */}
          {/*
            Um grid para organizar os projetos.
            "grid-cols-1 md:grid-cols-2 lg:grid-cols-3": define o número de colunas com base no tamanho da tela.
            "gap-4": define o espaçamento entre os itens do grid.
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-white p-4 shadow rounded">Projeto 1</div> {/*  */}
            <div className="bg-white p-4 shadow rounded">Projeto 2</div> {/*  */}
          </div>
        </section>

        {/* Seção "Contato". */}
        <section id="contato" className="p-10">
          <h2 className="text-2xl font-semibold mb-2">Contato</h2> {/*  */}
          <p> Você pode me encontrar no email: wbsbaltazar@gmail.com </p> {/*  */}
        </section>
      </main>
    </>
  );
}