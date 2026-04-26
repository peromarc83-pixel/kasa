import { useState, useEffect } from 'react'
import Banner from '../components/Banner'
import Gallery from '../components/Gallery'

export default function Home() {
  const [logements, setLogements] = useState([])

  useEffect(() => {
    fetch('http://localhost:8080/api/properties')
      .then((response) => response.json())
      .then((data) => setLogements(data))
  }, [])

  return (
   <main>
      <Banner image="/IMG.png" title="Chez vous, partout et ailleurs" />
      <Gallery logements={logements} />
    </main>
  )
}
