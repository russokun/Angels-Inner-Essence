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
        <h1 className="text-2xl font-bold text-secondary">Arquitectura de Vida</h1>

        {/* Hamburger Menu para móvil */}
        <button 
          className="md:hidden text-secondary"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg 
            className="w-6 h-6" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
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
                onClick={() => handleNavClick(item.id)}
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