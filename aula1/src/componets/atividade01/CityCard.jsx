function CityCard({ nome, imagem, votos }) {
  return (
    <div className="card">
      <h2>{nome}</h2>
      <img src={imagem} alt={nome} />
      <p>VOTOS: {votos}</p>
    </div>
  );
}

export default CityCard;