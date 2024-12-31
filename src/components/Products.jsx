import angelsEssenceImage from '../assets/3.png'
import innerEssenceImage from '../assets/10.png'

const features = [
  {
    title: "Angels Essence",
    description: "Conecta con tu Niño Interior y sana experiencias pasadas a través de imágenes evocadoras que facilitan la catarsis emocional.",
    benefits: ["Conexión con el niño interior", "Liberación de bloqueos", "Herramienta terapéutica"],
    image: angelsEssenceImage
  },
  {
    title: "Inner Essence",
    description: "Proyecta y diseña tu futuro ideal con claridad, encontrando la motivación y el propósito para alcanzar tus metas.",
    benefits: ["Diseño de futuro", "Claridad mental", "Inspiración continua"],
    image: innerEssenceImage
  }
]

export default function Products() {
  return (
    <section id="products" className="py-20">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-bold text-center mb-12">
          Dos Poderosas Herramientas de Fototerapia
        </h3>
        <div className="grid md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="p-8 rounded-lg bg-black bg-opacity-30 border border-secondary hover:scale-105 transition-transform"
            >
              {feature.image && (
                <div className="mb-6 max-w-lg mx-auto">
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full rounded-lg shadow-lg hover:scale-105 transition-transform"
                  />
                </div>
              )}
              <h4 className="text-2xl font-bold mb-4 text-secondary">{feature.title}</h4>
              <p className="text-gray-300 mb-6">{feature.description}</p>
              <ul className="space-y-2">
                {feature.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-secondary mr-2">•</span>
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