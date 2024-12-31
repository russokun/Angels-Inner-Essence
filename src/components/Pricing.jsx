import pricingImage from '../assets/6.png'

export default function Pricing() {
  return (
    <section id="pricing" className="bg-black bg-opacity-30 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Oferta Especial de Lanzamiento</h3>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Imagen de pricing */}
            <div className="order-2 md:order-1">
              <img 
                src={pricingImage} 
                alt="Inner Essence Cards Showcase"
                className="w-full rounded-lg shadow-xl hover:scale-[1.02] transition-transform duration-500"
              />
            </div>

            {/* Pricing card */}
            <div className="order-1 md:order-2">
              <div className="p-8 bg-primary border-2 border-secondary rounded-lg">
                <p className="text-4xl font-bold text-secondary mb-4">$69.99</p>
                <p className="text-gray-300 mb-4">Ahorra $30</p>
                <ul className="text-left space-y-3 mb-6">
                  <li>✓ Mazo Angels Essence</li>
                  <li>✓ Mazo Inner Essence</li>
                  <li>✓ Guías de Preguntas y Ejercicios</li>
                  <li>✓ Acceso a la Comunidad</li>
                </ul>
                <button className="w-full bg-secondary text-primary px-8 py-3 rounded-full font-bold hover:bg-opacity-90 transition-all">
                  QUIERO MI PACK AHORA
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 