import "../styles/Card.scss";

export default function Card({ logement }) {
  return (
    <div className="card">
      <img src={logement.cover} alt={logement.title} className="card-image" />
      <div className="card-overlay"></div>
      <h2 className="card-title">{logement.title}</h2>
    </div>
  );
}
