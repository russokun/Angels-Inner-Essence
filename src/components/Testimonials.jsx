import testimonialImage from '../assets/9.png'

const testimonials = [
  {
    quote: "He llevado Angels Essence a mis sesiones de coaching y mis clientes han descubierto emociones que desconocían. ¡El impacto ha sido asombroso!",
    author: "María José, Coach Certificada"
  },
  {
    quote: "Las imágenes despiertan memorias en mis pacientes que de otro modo no habrían surgido. Ahora puedo trabajar su pasado y preparar un futuro más positivo.",
    author: "Pedro, Psicólogo Clínico"
  }
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24">
      <div className="section-container">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-3xl xs:text-4xl lg:text-5xl font-bold text-center mb-16">
            Casos de Éxito
          </h3>

          {/* Testimonios */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 mb-20">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="group p-8 rounded-xl bg-dark/30 hover:bg-dark/40 transition-all duration-300 hover:shadow-xl border-l-4 border-accent/50 hover:border-accent"
              >
                <p className="text-light/90 italic mb-6 text-lg leading-relaxed">"{testimonial.quote}"</p>
                <p className="text-secondary group-hover:text-accent font-semibold text-lg transition-colors">— {testimonial.author}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center mb-20">
            <p className="text-2xl md:text-3xl text-light/90 font-semibold">
              Estas cartas ya están cambiando vidas. ¿Te atreves a explorar su poder?
            </p>
          </div>

          {/* Imagen de Conexiones Poderosas */}
          <div className="max-w-5xl mx-auto">
            <div className="aspect-[16/10] md:aspect-[21/9] overflow-hidden rounded-xl shadow-2xl">
              <div className="relative group h-full">
                <img 
                  src={testimonialImage} 
                  alt="Conexiones Poderosas"
                  className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/20 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Final Message */}
          <div className="max-w-4xl mx-auto mt-16 text-center">
            <h4 className="text-2xl md:text-3xl font-bold text-secondary mb-6">
              Conexiones Poderosas
            </h4>
            <p className="text-lg md:text-xl text-light/90 leading-relaxed">
              Únete a esta experiencia única de sanación y crecimiento. Con Angels & Inner Essence Cards, estarás equipado para crear sesiones memorables, profundas y efectivas que marcarán un antes y un después en tus clientes.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}