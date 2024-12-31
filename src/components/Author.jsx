import authorImage from '../assets/fotoanalidia.jpg' // Asegúrate de guardar la imagen con este nombre

export default function Author() {
  return (
    <section id="author" className="bg-black bg-opacity-30 py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h3 className="text-3xl font-bold mb-8">Sobre la Autora</h3>
          
          {/* Foto circular del autor */}
          <div className="mb-6">
            <div className="w-48 h-48 md:w-56 md:h-56 mx-auto rounded-full overflow-hidden border-4 border-secondary">
              <img 
                src={authorImage} 
                alt="Ana Lidia Peña" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          <h4 className="text-2xl text-secondary mb-4">Ana Lidia Peña</h4>
          <p className="text-gray-300 mb-6">
            Fundadora de Arquitectura de Vida y especialista en fototerapia y metodologías creativas de intervención.
            Con años de experiencia en facilitación y desarrollo personal.
          </p>
        </div>
      </div>
    </section>
  )
} 