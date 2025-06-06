import { useState } from 'react';
import Mensagem from './Mensagem';
import Botao from './Botao'; // <- Esse import deve ficar aqui em cima, fora da função

function App() {
  const [nome, setNome] = useState('');

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center gap-6">
      <h1 className="text-2xl font-bold">Componentização com Props</h1>

      <input
        type="text"
        value={nome}
        onChange={(e) => setNome(e.target.value)}
        placeholder="Digite seu nome"
        className="px-4 py-2 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-500"
      />

      <Mensagem nome={nome} />

      <Botao aoClicar={() => alert(`Nome enviado: ${nome}`)}>
        Enviar Nome
      </Botao>
    </div>
  );
}

export default App;
