import testimonialImage from '../assets/9.png'

const testimonials = [
  {
    quote: "He llevado Angels Essence a mis sesiones de coaching y mis clientes descubrieron emociones que desconocían. ¡Impactante!",
    author: "María José, Coach Certificada"
  },
  {
    quote: "Las imágenes despiertan memorias en mis pacientes que de otro modo no habrían surgido. Ahora puedo trabajar su pasado y preparar un futuro más positivo.",
    author: "Pedro, Psicólogo Clínico"
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl font-bold text-center mb-12">Casos de Éxito</h3>

          {/* Testimonios */}
          <div className="grid md:grid-cols-2 gap-8 mb-20">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="p-6 bg-black bg-opacity-30 rounded-lg hover:bg-opacity-40 transition-all"
              >
                <p className="text-gray-300 italic mb-4 text-lg">"{testimonial.quote}"</p>
                <p className="text-secondary font-semibold">— {testimonial.author}</p>
              </div>
            ))}
          </div>

          {/* Imagen de Conexiones Poderosas */}
          <div className="max-w-4xl mx-auto">
            <div className="aspect-[16/9] overflow-hidden rounded-lg">
              <img 
                src={testimonialImage} 
                alt="Conexiones Poderosas"
                className="w-full object-cover object-top hover:scale-[1.02] transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 