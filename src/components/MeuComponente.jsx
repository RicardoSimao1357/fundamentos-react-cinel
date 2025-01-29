const MeuComponente = (props) => {
  const { animal } = props;
  const { nome, idade, raça, dono } = animal;

  return (
    <div className="gato">
      <div className="nome">{nome}</div>
      <div className="idade">Idade: {idade}</div>
      <div className="raca">{raça}</div>
      <div className="dono">{dono.nome}</div>
      <div className="dono">{dono.cidade}</div>
    </div>
  );
};

export default MeuComponente;
