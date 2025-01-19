import angelsEssenceImage from '../assets/3.png'
import innerEssenceImage from '../assets/10.png'

const features = [
  {
    title: "Angels Essence",
    description: "Conecta profundamente con tu Niño Interior, sana heridas emocionales y libera bloqueos que te impiden avanzar. A través de imágenes evocadoras, estas cartas te permiten explorar recuerdos y emociones olvidadas.",
    benefits: ["Conexión con el niño interior", "Liberación de bloqueos emocionales", "Herramienta terapéutica intuitiva"],
    image: angelsEssenceImage
  },
  {
    title: "Inner Essence",
    description: "Diseña tu mejor versión futura y encuentra la claridad y motivación necesarias para alcanzar tus metas. Estas cartas fomentan la introspección y el enfoque en tus objetivos.",
    benefits: ["Diseña un funturo ideal", "Claridad mental y emocional", "Inspiración y propósito continuo"],
    image: innerEssenceImage
  }
]

export default function Products() {
  return (
    <section id="products" aria-label="Nuestros Productos" className="py-24">
      <div className="section-container">
        <h3 className="text-3xl xs:text-4xl lg:text-5xl font-bold text-center mb-16">
          Dos Poderosas Herramientas de Fototerapia
        </h3>
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-xl bg-dark/30 border border-secondary/30 hover:border-accent transition-all duration-300 hover:shadow-xl"
            >
              {feature.image && (
                <div className="mb-8 overflow-hidden rounded-lg">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full aspect-video object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
              )}
              <h4 className="text-2xl xs:text-3xl font-bold mb-4 text-secondary group-hover:text-accent transition-colors">{feature.title}</h4>
              <p className="text-light/90 mb-6 text-lg">{feature.description}</p>
              <ul className="space-y-3">
                {feature.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center text-light/80">
                    <span className="text-secondary mr-3">•</span>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
} 