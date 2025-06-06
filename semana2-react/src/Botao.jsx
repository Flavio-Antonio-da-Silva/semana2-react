function Botao(props) {
  return (
    <button
      onClick={props.aoClicar}
      className="bg-blue-500 text-white px-4 py-2 rounded-xl hover:bg-blue-600 transition"
    >
      {props.children}
    </button>
  );
}

export default Botao;
