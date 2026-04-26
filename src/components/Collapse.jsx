import { useState } from 'react'
import '../styles/Collapse.scss'

export default function Collapse({ title, content }) {

  
  const [estOuvert, setEstOuvert] = useState(false)

  
  function toggleCollapse() {
    setEstOuvert(!estOuvert)
  }
                               
 
  let classeHeader = 'collapse__header'
  let classeArrow = 'collapse__arrow'

  if (estOuvert) {
    classeHeader = 'collapse__header collapse__header--open'
    classeArrow = 'collapse__arrow collapse__arrow--open'
  }

  return (
    <div className="collapse">

     
      <button className={classeHeader} onClick={toggleCollapse}>
        <span className="collapse__title">{title}</span>
        <span className={classeArrow}> <img src="/Vector.svg" alt="arrow"/></span>
      </button>

     
      {estOuvert && (
        <div className="collapse__content">
          {content}
        </div>
      )}

    </div>
  )
}