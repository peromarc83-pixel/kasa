import Banner from "../components/Banner";
import "../styles/About.scss";

export default function About() {
  return (
    <main>
      <Banner image="/img-aproposde.png" title="À Propos de Kasa" className="about-banner" />
      <div className="about-content">
        <h2>À Propos de Kasa</h2>
        <p>Bienvenue sur notre plateforme de location de logements.</p>
      </div>
    </main>
  );
}
