function ListaMensagens({ nomes }) {
  return (
    <ul className="space-y-2">
      {nomes.map((nome, index) => (
        <li key={index} className="bg-white p-4 rounded-xl shadow">
          Olá, {`${nome || 'visitante'}!`}
        </li>
      ))}
    </ul>
  );
}

export default ListaMensagens;
