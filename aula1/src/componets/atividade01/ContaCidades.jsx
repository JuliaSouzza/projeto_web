import { useState, useEffect } from "react";
import CityCard from "./CityCard";
import "./ContaCidades.css";

function ContaCidades() {
  const [votos, setVotos] = useState({
    quixada: 0,
    quixeramobim: 0,
    banabuiu: 0,
    iguatu: 0
  });

  const [encerrado, setEncerrado] = useState(false);

  function votar(cidade) {
    if (encerrado) return;

    setVotos((prev) => ({
      ...prev,
      [cidade]: prev[cidade] + 1
    }));
  }

  useEffect(() => {
    const valores = Object.values(votos);

    if (valores.some((v) => v >= 10)) {
      setEncerrado(true);

      const cidades = Object.keys(votos);

      let maisVotada = cidades[0];
      let menosVotada = cidades[0];

      cidades.forEach((cidade) => {
        if (votos[cidade] > votos[maisVotada]) {
          maisVotada = cidade;
        }
        if (votos[cidade] < votos[menosVotada]) {
          menosVotada = cidade;
        }
      });

      alert(`🥇 Mais votada: ${maisVotada.toUpperCase()}
🥉 Menos votada: ${menosVotada.toUpperCase()}`);
    }
  }, [votos]);

  return (
    <div>
      <h1>Votação de Cidades</h1>

      <div className="cards">
        <CityCard
          nome="Quixadá"
          imagem="https://upload.wikimedia.org/wikipedia/commons/3/3b/Quixada.jpg"
          votos={votos.quixada}
        />
        <CityCard
          nome="Quixeramobim"
          imagem="https://upload.wikimedia.org/wikipedia/commons/5/5c/Quixeramobim.jpg"
          votos={votos.quixeramobim}
        />
        <CityCard
          nome="Banabuiú"
          imagem="https://upload.wikimedia.org/wikipedia/commons/2/2c/Banabuiu.jpg"
          votos={votos.banabuiu}
        />
        <CityCard
          nome="Iguatu"
          imagem="https://upload.wikimedia.org/wikipedia/commons/4/4a/Iguatu.jpg"
          votos={votos.iguatu}
        />
      </div>

      <div className="botoes">
        <button onClick={() => votar("quixada")}>Quixadá</button>
        <button onClick={() => votar("quixeramobim")}>Quixeramobim</button>
        <button onClick={() => votar("banabuiu")}>Banabuiú</button>
        <button onClick={() => votar("iguatu")}>Iguatu</button>
      </div>
    </div>
  );
}

export default ContaCidades;