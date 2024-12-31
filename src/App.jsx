import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Author from './components/Author'
import Products from './components/Products'
import Pricing from './components/Pricing'
import Testimonials from './components/Testimonials'
import CallToAction from './components/CallToAction'

import './index.css'
import './styles/globals.css'

function App() {
  return (
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
    </div>
  )
}

export default App
