import { useState } from 'react';
import '../styles/Slideshow.scss';

function Slideshow({ pictures }) {

  
  const [currentIndex, setCurrentIndex] = useState(0);

 
  if (!pictures || pictures.length === 0) {
    return null;
  }

  
  function prevImage() {
    if (currentIndex === 0) {
      setCurrentIndex(pictures.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  
  function nextImage() {
    if (currentIndex === pictures.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  return (
    <div className="slideshow">

     
      <img
        src={pictures[currentIndex]}
        alt={`image ${currentIndex + 1}`}
        className="slideshow__image"
      />

     
      {pictures.length > 1 && (
        <div className="slideshow__controls">

        
          <button
            className="slideshow__btn slideshow__btn--prev"
            onClick={prevImage}
          >
            <img src="/arrow-gauche.svg" alt="précédent" />
          </button>

       
          <button
            className="slideshow__btn slideshow__btn--next"
            onClick={nextImage}
          >
            <img src="/arrow-droit.svg" alt="suivant" />
          </button>

         
          <p className="slideshow__counter">
            {currentIndex + 1} / {pictures.length}
          </p>

        </div>
      )}

    </div>
  );
}

export default Slideshow;