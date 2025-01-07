import { useState } from 'react'
import { useScroll } from '../hooks/useScroll'

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { scrollToSection } = useScroll()

  const navItems = [
    { name: 'Inicio', id: 'hero' },
    { name: 'Autora', id: 'author' },
    { name: 'Productos', id: 'products' },
    { name: 'Precios', id: 'pricing' },
    { name: 'Testimonios', id: 'testimonials' },
  ]

  const handleNavClick = (id) => {
    scrollToSection(id)
    setIsMenuOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-primary bg-opacity-95 z-50 py-4 px-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl md:text-3xl font-bold gradient-text">
          Arquitectura de Vida
          <span className="block text-sm font-normal text-secondary">Transforma tu Esencia</span>
        </h1>

        {/* Menú hamburguesa mejorado */}
        <button 
          className="md:hidden p-3 rounded-lg bg-dark/50 hover:bg-dark/70 transition-all group"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        >
          <div className="relative w-6 h-6">
            {/* Líneas del menú con animación */}
            <span 
              className={`absolute left-0 block h-0.5 w-full bg-gradient-to-r from-accent to-secondary transform transition-all duration-300 ease-in-out ${
                isMenuOpen 
                  ? 'rotate-45 top-3' 
                  : 'rotate-0 top-1'
              }`}
            ></span>
            <span 
              className={`absolute left-0 block h-0.5 w-full bg-gradient-to-r from-accent to-secondary transform transition-all duration-300 ease-in-out ${
                isMenuOpen 
                  ? 'opacity-0' 
                  : 'opacity-100 top-3'
              }`}
            ></span>
            <span 
              className={`absolute left-0 block h-0.5 w-full bg-gradient-to-r from-accent to-secondary transform transition-all duration-300 ease-in-out ${
                isMenuOpen 
                  ? '-rotate-45 top-3' 
                  : 'rotate-0 top-5'
              }`}
            ></span>
          </div>
        </button>

        {/* Menú de navegación para desktop */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <button
              key={item.name}
              onClick={() => handleNavClick(item.id)}
              className="text-gray-300 hover:text-secondary transition-colors"
            >
              {item.name}
            </button>
          ))}
          <button className="bg-secondary text-primary px-6 py-2 rounded-full hover:bg-opacity-90 transition-all">
            ¡QUIERO MIS MAZOS AHORA!
          </button>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div className="absolute top-full left-0 right-0 bg-primary bg-opacity-95 py-4 md:hidden">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  scrollToSection(item.id)
                  setIsMenuOpen(false)
                }}
                className="block w-full text-left px-4 py-2 text-gray-300 hover:text-secondary transition-colors"
              >
                {item.name}
              </button>
            ))}
            <div className="px-4 pt-2">
              <button className="w-full bg-secondary text-primary px-6 py-2 rounded-full hover:bg-opacity-90 transition-all">
                ¡QUIERO MIS MAZOS AHORA!
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
} 