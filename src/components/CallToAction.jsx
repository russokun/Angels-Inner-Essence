import footerImage from '../assets/4.png'

export default function CallToAction() {
  return (
    <section className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-dark/30 z-0"></div>
      <div className="section-container relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl xs:text-4xl lg:text-5xl font-bold mb-8">
              Únete a esta <span className="text-accent">Experiencia</span> de 
              <span className="text-secondary"> Sanación</span> y Crecimiento
            </h3>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="aspect-[16/10] md:aspect-[21/9] overflow-hidden rounded-xl shadow-2xl mb-12">
              <div className="relative group h-full">
                <img 
                  src={footerImage} 
                  alt="Angels Essence Cards Showcase"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark/30 to-transparent"></div>
              </div>
            </div>
            <div className="max-w-3xl mx-auto text-center">
              <p className="text-xl text-light/90 mb-8 leading-relaxed">
              Haz clic en el enlace y empieza a transformar vidas con Angels & Inner Essence Cards.
              </p>
              <button className="bg-secondary text-primary px-10 py-4 rounded-full hover:bg-opacity-90 font-bold text-lg transition-all shadow-lg hover:shadow-xl">
              ¡Regístrate Ahora! 

              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 