import { useState, useEffect } from 'react'
import cardImage from '../assets/logoblanco.png'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <header id="hero" className="container mx-auto px-4 py-16 pt-28">
      <div className="flex flex-col md:flex-row items-center justify-between gap-12">
        <div className={`md:w-1/2 space-y-6 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          <h2 className="text-5xl font-bold leading-tight">
            Conecta con Tu Niño Interior y Diseña Tu 
            <span className="text-secondary"> Mejor Versión Futura</span>
          </h2>
          <p className="text-xl text-gray-300">
            Herramientas de fototerapia y exploración emocional para facilitadores, coaches y
            terapeutas.
          </p>
          <div className="flex gap-4">
            <button className="bg-secondary text-primary px-8 py-3 font-bold rounded-full hover:bg-opacity-90 transition-all">
              ¡QUIERO MIS MAZOS AHORA!
            </button>
          </div>
        </div>

        <div className="md:w-1/2">
          <img 
            src={cardImage} 
            alt="Angels & Inner Essence Cards" 
            className="w-full max-w-md mx-auto animate-float"
          />
        </div>
      </div>
    </header>
  )
} 