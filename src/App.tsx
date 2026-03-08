import { Navbar } from '@/components/Navbar'
import { Hero } from '@/components/Hero'
import { ValueProposition } from '@/components/ValueProposition'
import { Services } from '@/components/Services'
import { Differentials } from '@/components/Differentials'
import { Portfolio } from '@/components/Portfolio'
import { Footer } from '@/components/Footer'

export function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <ValueProposition />
      <Services />
      <Differentials />
      <Portfolio />
      <Footer />
    </div>
  )
}
