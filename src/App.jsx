import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Author from './components/Author'
import Products from './components/Products'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import CallToAction from './components/CallToAction'
import Footer from './components/Footer'

import './index.css'
import './styles/globals.css'

export default function App() {
  return (
    <>
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Product",
          "name": "Angels & Inner Essence Cards",
          "description": "Herramientas de fototerapia para desarrollo personal y terapéutico",
          "brand": {
            "@type": "Brand",
            "name": "Arquitectura de Vida"
          },
          "offers": {
            "@type": "Offer",
            "price": "69.99",
            "priceCurrency": "USD"
          },
          "author": {
            "@type": "Person",
            "name": "Ana Lidia Peña"
          }
        })}
      </script>
      <div className="min-h-screen">
        <div className="container mx-auto px-4">
          <Navbar />
        </div>
        <Hero />
        <Author />
        <Products />
        <Pricing />
        <Testimonials />
        <CallToAction />
        <Footer />
      </div>
    </>
  )
}
