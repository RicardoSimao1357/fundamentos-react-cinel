import { useState } from 'react';

function Laranjas() {
  // 1. Prevenir que as laranjas baixem de 0
  // 2. Colocar um botão para Aumentar Laranja (funcional)
  // 3. Colocar um botão que reseta o número de laranjas para o inicial
  // 4. Colocar o número de laranjas em emoji
  // (por exemplo, se for 6 colocar 🍊🍊🍊🍊🍊🍊)

  const [laranjas, setLaranjas] = useState(10);

  const handleClick = () => {
    console.log('Comi uma laranja!!! Tenho ' + laranjas);
    setLaranjas(laranjas > 0 ? laranjas - 1 : 0);
  };

  const handleClick2 = () => {
    console.log('Adicionei uma laranja!!! Tenho ' + laranjas);
    setLaranjas(laranjas > 0 ? laranjas + 1 : 0);
  };

  const handleClick3 = () => {
    setLaranjas(10);
  };

  const getClassLaranjas = () => {
    if (laranjas === 0) return 'none';
    else if (laranjas === 1 || laranjas === 2) return 'low';
    else if (laranjas >= 3 && laranjas <= 10) return 'normal';
    else return '';
  };

  return (
    <div className={`laranjas ${getClassLaranjas()}`}>
      <span>{'🍊'.repeat(laranjas)}</span> laranjitas.
      <button onClick={handleClick}>Comer Laranja</button>
      <button onClick={handleClick2}>Adicionar Laranja</button>
      <button onClick={handleClick3}>Repor Laranjas</button>
    </div>
  );
}

export default Laranjas;
