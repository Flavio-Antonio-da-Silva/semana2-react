import { useState } from 'react';
import Mensagem from './Mensagem';
import Botao from './Botao';
import ListaMensagens from './ListaMensagens';

function App() {
  const [nome, setNome] = useState('');
  const [nomes, setNomes] = useState([]);

  function adicionarNome() {
    if (nome.trim() !== '') {
      setNomes([...nomes, nome]);
      setNome('');
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-6 p-4">
      <h1 className="text-2xl font-bold">Componentização com Lista</h1>

      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite seu nome"
        className="px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />

      <Botao aoClicar={adicionarNome}>Adicionar Nome</Botao>

      {nomes.length > 0 ? (
        <>
          <ListaMensagens nomes={nomes} />
          <Botao aoClicar={() => setNomes([])}>Limpar Lista</Botao>
        </>
      ) : (
        <p className="text-gray-500 italic">Nenhum nome adicionado ainda.</p>
      )}
    </div>
  );
}

export default App;
