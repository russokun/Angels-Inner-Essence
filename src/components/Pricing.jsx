import pricingImage from '../assets/6.png'

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-dark/30 z-0"></div>
      <div className="section-container relative z-10">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl xs:text-4xl lg:text-5xl font-bold text-center mb-16">
            Oferta Especial de Lanzamiento
          </h3>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Imagen de pricing */}
            <div className="order-2 md:order-1 overflow-hidden rounded-xl shadow-2xl">
              <div className="aspect-[4/3] relative group">
                <img 
                  src={pricingImage} 
                  alt="Inner Essence Cards Showcase"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="gradient-overlay opacity-30"></div>
              </div>
            </div>

            {/* Pricing card */}
            <div className="order-1 md:order-2">
              <div className="p-8 xs:p-10 bg-dark/50 border-2 border-secondary rounded-xl shadow-xl">
                <h4 className="text-2xl font-bold text-light mb-6">Pack Completo</h4>
                <div className="flex items-center gap-4 mb-4">
                  <p className="text-4xl xs:text-5xl font-bold text-secondary">$69.99</p>
                  <div className="text-lg">
                    <span className="line-through text-light/50">$99.99</span>
                    <span className="ml-2 text-accent font-bold">-30%</span>
                  </div>
                </div>
                <p className="text-xl text-accent font-semibold mb-6">¡Ahorra $30 por tiempo limitado!</p>
                
                <p className="text-xl font-semibold text-light mb-4">Incluye:</p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-center text-lg text-light/80">
                    <span className="text-secondary mr-3">⦁</span>
                    Mazo Angels Essence
                  </li>
                  <li className="flex items-center text-lg text-light/80">
                    <span className="text-secondary mr-3">⦁</span>
                    Mazo Inner Essence
                  </li>
                  <li className="flex items-center text-lg text-light/80">
                    <span className="text-secondary mr-3">⦁</span>
                    Guías de preguntas y ejercicios descargables
                  </li>
                  <li className="flex items-center text-lg text-light/80">
                    <span className="text-secondary mr-3">⦁</span>
                    Acceso exclusivo a la comunidad de facilitadores
                  </li>
                </ul>
                <button className="w-full bg-secondary text-primary px-8 py-4 text-sm rounded-full font-bold xs:px-10 hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl">
                  ¡Consigue tu pack y transforma tus sesiones hoy mismo!
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}