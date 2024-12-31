import footerImage from '../assets/4.png'

export default function CallToAction() {
  return (
    <section className="bg-black bg-opacity-30 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h3 className="text-3xl font-bold mb-6">
            Únete a esta Experiencia de Sanación y Crecimiento
          </h3>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="aspect-[16/9] max-h-[500px] overflow-hidden">
            <img 
              src={footerImage} 
              alt="Angels Essence Cards Showcase"
              className="w-full h-full object-cover rounded-lg shadow-xl"
            />
          </div>
          <p className="text-center text-xl mt-8 text-gray-300">
            Este curso es tu pasaporte para llevar tus sesiones y talleres a nuevas alturas. 
            Descubre el poder transformador de los ejercicios con Angels Essence y eleva tu práctica a un nivel superior.
          </p>
          <div className="text-center mt-6">
            <button className="bg-secondary text-primary px-8 py-3 rounded-full hover:bg-opacity-90 font-bold transition-all">
              REGISTRATE EN EL LINK
            </button>
          </div>
        </div>
      </div>
    </section>
  )
} 