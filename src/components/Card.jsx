import { Link } from "react-router-dom"
import "../styles/Card.scss"

export default function Card({ logement }) {
  return (
    <Link to={`/logement/${logement.id}`} className="card">
      <img src={logement.cover} alt={logement.title} className="card-image" />
      <div className="card-overlay"></div>
      <h2 className="card-title">{logement.title}</h2>
    </Link>
  )
}
