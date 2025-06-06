function Mensagem(props) {
  return (
    <p className="text-xl">Olá, {props.nome || 'visitante!'}</p>
  );
}

export default Mensagem;
