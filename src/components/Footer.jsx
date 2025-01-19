export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark/50 py-12">
      <div className="section-container">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="space-y-2">
            {/* Logo y contacto integrados */}
            <h2 className="text-2xl font-bold gradient-text">
              Arquitectura de Vida
            </h2>
            <div className="flex flex-col items-center gap-2 text-light/70 text-sm">
              <a 
                href="mailto:info@arquitecturadevida.com" 
                className="hover:text-secondary transition-colors"
              >
                📧 Contacto: info@arquitecturadevida.com

              </a>
              <a 
                href="tel:+123456789" 
                className="hover:text-secondary transition-colors"
              >
                📞 Teléfono: +1 (809) 605-1317

              </a>
            </div>
          </div>

          {/* Línea separadora sutil */}
          <div className="w-24 h-px bg-light/10 mx-auto"></div>

          {/* CTA Final */}
          <div className="max-w-2xl mx-auto px-4">
            <p className="text-sm sm:text-base md:text-lg text-light/80 leading-relaxed">
              No pierdas la oportunidad de llevar tus sesiones al siguiente nivel. ¡Consigue tu pack ahora y comienza a generar conexiones profundas y auténticas!
            </p>
          </div>

          {/* Línea separadora sutil */}
          <div className="w-24 h-px bg-light/10 mx-auto"></div>

          {/* Derechos y créditos */}
          <div className="space-y-2 text-sm text-light/50">
            <p>
              © {currentYear} Arquitectura de Vida. Todos los derechos reservados.
            </p>
            <p>
              Desarrollado con <span className="text-accent">♥</span> por{' '}
              <a 
                href="https://russ0devportfolio.netlify.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="gradient-text hover:opacity-80 transition-opacity"
              >
                Agustin Russo
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
} 