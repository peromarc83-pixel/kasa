import { useState, useEffect } from 'react'
import { useParams, Navigate } from 'react-router-dom'
import Slideshow from '../components/Slideshow'
import Collapse from '../components/Collapse'
import '../styles/Logement.scss'

export default function Logement() {
  const { id } = useParams()
  const [logement, setLogement] = useState(null)
  const [erreur, setErreur] = useState(false)

  useEffect(() => {
    fetch('http://localhost:8080/api/properties/' + id)
      .then((response) => {
        if (!response.ok) {
          setErreur(true)
          return
        }
        return response.json()
      })
      .then((data) => {
        if (data) setLogement(data)
      })
  }, [id])

  if (erreur) {
    return <Navigate to="/404" replace />
  }

  if (!logement) {
    return <p>Chargement...</p>
  }
  return (
    <main className="logement">
      <Slideshow pictures={logement.pictures} />

      <div className="logement__info">
        <div className="logement__info-left">
          <h1 className="logement__title">{logement.title}</h1>
          <p className="logement__location">{logement.location}</p>
          <div className="logement__tags">
            {logement.tags.map((tag, i) => (
              <span key={i} className="logement__tag">{tag}</span>
            ))}
          </div>
        </div>

        <div className="logement__info-right">
          <div className="logement__host">
            <span className="logement__host-name">{logement.host.name}</span>
            <img src={logement.host.picture} alt={logement.host.name} className="logement__host-img" />
          </div>
          <div className="logement__stars">
            {[1, 2, 3, 4, 5].map((star) => (
              <span key={star} className={star <= logement.rating ? 'star star--active' : 'star'}>
                ★
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="logement__collapses">
        <Collapse title="Description" content={logement.description} />
        <Collapse
          title="Équipements"
          content={
            <ul>
              {logement.equipments.map((eq, i) => <li key={i}>{eq}</li>)}
            </ul>
          }
        />
      </div>
    </main>
  )
}