import { useState } from "react";

function MeuContador() {
  const [contador, setContador] = useState(0);

  function contar() {
    setContador((contadorAnterior) => contadorAnterior + 1);
  }

  function testeParidade() {
    if (contador % 2 === 0) {
      return "Par";
    } else {
      return "Ímpar";
    }
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "10px",
      }}
    >
      <h1>Meu Contador: {contador}</h1>
      <h2>Paridade: {testeParidade()}</h2>

      <button onClick={contar}>CONTADOR</button>
    </div>
  );
}

export default MeuContador;