import authorImage from '../assets/fotoanalidia.jpg'

export default function Author() {
  return (
    <section id="author" className="relative py-24 overflow-hidden">
      <div className="absolute inset-0 bg-dark/30 z-0"></div>
      <div className="section-container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl xs:text-4xl lg:text-5xl font-bold mb-12 animate-fade-in">
            Sobre la Autora
          </h3>
          
          <div className="mb-8 animate-fade-in delay-100">
            <div className="w-40 h-40 xs:w-48 xs:h-48 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden border-4 border-secondary shadow-xl hover-scale">
              <img 
                src={authorImage} 
                alt="Ana Lidia Peña, experta en fototerapia y fundadora de Arquitectura de Vida" 
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </div>

          <h4 className="text-2xl xs:text-3xl text-secondary mb-6 font-display">Ana Lidia Peña</h4>
          <div className="space-y-4 text-light/90">
            <p className="text-lg">
              Fundadora de Arquitectura de Vida y especialista en fototerapia y metodologías creativas de intervención.
            </p>
            <p className="text-lg">
              Con años de experiencia en facilitación y desarrollo personal, mi misión es ayudarte a descubrir y potenciar tu verdadera esencia.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
} 