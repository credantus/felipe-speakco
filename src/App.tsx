import { HashRouter, Routes, Route } from 'react-router-dom'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import { HomePage } from '@/pages/HomePage'
import { ServiciosPage } from '@/pages/ServiciosPage'
import { TrabajosPage } from '@/pages/TrabajosPage'
import { AcademiaPage } from '@/pages/AcademiaPage'
import { ContactoPage } from '@/pages/ContactoPage'

export function App() {
  return (
    <HashRouter>
      <div className="min-h-screen bg-white dark:bg-dark flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/servicios" element={<ServiciosPage />} />
            <Route path="/trabajos" element={<TrabajosPage />} />
            <Route path="/academia" element={<AcademiaPage />} />
            <Route path="/contacto" element={<ContactoPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  )
}
