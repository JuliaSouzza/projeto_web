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
      <h1>Votação de Cidades Mais Bonitas</h1>

      <div className="cards">
        <CityCard
          nome="Quixadá"
          imagem="https://reporterceara.com.br/wp-content/uploads/2025/05/Ao-Por-do-Sol-na-Represa-do-Acude-Cedro_-localizada-na-Cidade-de-_quixada-_-no-interior-do-Estado-do.jpg"
          votos={votos.quixada}
        />
        <CityCard
          nome="Quixeramobim"
          imagem="https://reporterceara.com.br/wp-content/uploads/2023/08/Snapinsta.app_346013415_1058367938474177_382983154268917231_n_1080.jpg"
          votos={votos.quixeramobim}
        />
        <CityCard
          nome="Banabuiú"
          imagem="https://www.crede12.seduc.ce.gov.br/wp-content/uploads/sites/109/2021/10/Banabuiu-ce.jpg"
          votos={votos.banabuiu}
        />
        <CityCard
          nome="Iguatu"
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTIbzmF89alAf1-QLWk6Aedy5fpiZ0W-bio0A&s"
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