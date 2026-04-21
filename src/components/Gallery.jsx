import Card from "./Card";
import "../styles/Gallery.scss";

export default function Gallery({ logements }) {
  return (
    <div className="gallery">
      {logements.map((logement) => (
        <Card key={logement.id} logement={logement} />
      ))}
    </div>
  );
}
