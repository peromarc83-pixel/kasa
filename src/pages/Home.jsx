import Banner from "../components/Banner";
import Gallery from "../components/Gallery";
import logements from "../data/logements.json";

export default function Home() {
  return (
    <main>
      <Banner image="/IMG.png" title="Chez vous, partout et ailleurs" />
      <Gallery logements={logements} />
    </main>
  );
}
