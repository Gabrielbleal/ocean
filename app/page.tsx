"use client"

import { Navbar } from "@/components/navbar"
import { LeafletMap } from "@/components/leaflet-map"
import { useState } from "react"
import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Services } from "@/components/services"
import { Differentials } from "@/components/differentials"
import { Partners } from "@/components/partners"
import { Gallery } from "@/components/gallery"
import { WhatsAppCTA } from "@/components/whatsapp-cta"
import { FAQ } from "@/components/faq"
import { ContactForm } from "@/components/contact-form"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { AnaliseCreditoButton } from "@/components/analise-credito-button"
import { ExitPopup } from "@/components/exit-popup"

export default function Home() {
  const [mapOpen, setMapOpen] = useState(false)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      {/* Botão abaixo do portfólio */}
      <div className="flex justify-center my-8">
        <button
          className="bg-primary text-primary-foreground px-6 py-3 rounded-lg shadow-lg hover:bg-primary/90 transition-all text-lg font-semibold"
          onClick={() => setMapOpen(true)}
        >
          Encontrar imóvel ideal na minha região
        </button>
      </div>
      <Services />
      <Differentials />
      <Partners />
      <WhatsAppCTA />
      <FAQ />
      <ContactForm />

      {/* Mapa pequeno ao lado do botão do WhatsApp com ícone customizado */}
      {!mapOpen && (
        <button
          className="fixed bottom-5 right-24 z-50 w-14 h-14 border border-gray-300 bg-blue-600 rounded-lg overflow-hidden flex items-center justify-center transition-all duration-300 shadow-lg hover:bg-blue-700 focus:outline-none"
          onClick={() => setMapOpen(true)}
          aria-label="Abrir mapa de apartamentos"
          type="button"
        >
          <img src="/mapa.png" alt="Mapa" className="w-8 h-8 object-contain pointer-events-none" />
        </button>
      )}

      {/* Mapa grande centralizado ao clicar no botão */}
      {mapOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40" onClick={e => { if (e.target === e.currentTarget) setMapOpen(false) }}>
          <div className="bg-white rounded-lg shadow-2xl p-2" style={{ maxWidth: 660, width: '90vw' }}>
            <LeafletMap />
          </div>
        </div>
      )}

      <Footer />
      <WhatsAppButton />
      <AnaliseCreditoButton />
      <ExitPopup />
    </main>
  )
}
