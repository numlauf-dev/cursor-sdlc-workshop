import { useCallback, useEffect, useState } from 'react'
import { slides } from '../slides'

const SlideDeck = () => {
  const totalSlides = slides.length
  const [currentSlide, setCurrentSlide] = useState(1)

  const showSlide = useCallback(
    (slideNumber) => {
      let nextSlide = slideNumber
      if (nextSlide > totalSlides) nextSlide = 1
      if (nextSlide < 1) nextSlide = totalSlides
      setCurrentSlide(nextSlide)
    },
    [totalSlides],
  )

  const changeSlide = useCallback(
    (delta) => {
      showSlide(currentSlide + delta)
    },
    [currentSlide, showSlide],
  )

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'ArrowRight' || event.key === ' ') {
        event.preventDefault()
        changeSlide(1)
      } else if (event.key === 'ArrowLeft') {
        event.preventDefault()
        changeSlide(-1)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [changeSlide])

  const progress = (currentSlide / totalSlides) * 100

  return (
    <>
      <div className="progress-bar" style={{ width: `${progress}%` }} />

      <div className="slide-container">
        {slides.map((slide, index) => {
          const SlideComponent = slide.component
          const isActive = currentSlide === index + 1
          const className = ['slide', slide.className, isActive ? 'active' : null]
            .filter(Boolean)
            .join(' ')

          return (
            <div className={className} data-slide={slide.id} key={slide.id}>
              <SlideComponent />
            </div>
          )
        })}
      </div>

      <div className="nav">
        <button
          className="nav-btn"
          onClick={() => changeSlide(-1)}
          disabled={currentSlide === 1}
        >
          ←
        </button>
        <span className="slide-counter">
          <span>{currentSlide}</span> / <span>{totalSlides}</span>
        </span>
        <button
          className="nav-btn"
          onClick={() => changeSlide(1)}
          disabled={currentSlide === totalSlides}
        >
          →
        </button>
      </div>
    </>
  )
}

export default SlideDeck
