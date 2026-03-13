"use client"

import { useState } from "react"
import Image from "next/image"
import { AnimatedSection } from "@/components/animated-section"

const sales = [
  { id: 1, title: "Apartamento de Luxo", location: "Jardins, São Paulo", image: "/luxury-apartment-exterior.png" },
  { id: 2, title: "Casa com Piscina", location: "Alphaville, Barueri", image: "/luxury-house-with-pool.png" },
  { id: 3, title: "Cobertura Premium", location: "Moema, São Paulo", image: "/penthouse-ocean-view.jpg" },
  { id: 4, title: "Casa de Campo", location: "Granja Viana, Cotia", image: "/luxury-country-house.png" },
  { id: 5, title: "Loft Moderno", location: "Vila Madalena, SP", image: "/modern-luxury-loft.jpg" },
  { id: 6, title: "Mansão Exclusiva", location: "Morumbi, São Paulo", image: "/exclusive-mansion.jpg" },
]

export function Gallery() {
  const [lightboxImage, setLightboxImage] = useState<(typeof sales)[0] | null>(null)

  return (
    <section id="vendas" className="py-16 px-4 md:py-24 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <span className="text-primary text-sm tracking-widest uppercase">Portfólio</span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-white">Vendas Realizadas</h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Alguns dos imóveis que ajudamos nossos clientes a conquistar
          </p>
        </AnimatedSection>

        {/* Grid responsivo */}
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-3">
          {sales.map((sale, index) => (
            <AnimatedSection key={sale.id} delay={index * 100}>
              <button
                onClick={() => setLightboxImage(sale)}
                className="group relative overflow-hidden rounded-xl border border-primary/10 bg-card w-full text-left"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={sale.image || "/placeholder.svg"}
                    alt={sale.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-semibold">
                    Vendido
                  </div>
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-12 h-12 rounded-full bg-primary/80 flex items-center justify-center">
                      <svg
                        className="h-6 w-6 text-primary-foreground"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 sm:p-4">
                  <h3 className="text-sm sm:text-base font-semibold text-white truncate">{sale.title}</h3>
                  <p className="text-xs sm:text-sm text-white/70 truncate">{sale.location}</p>
                </div>
              </button>
            </AnimatedSection>
          ))}
        </div>

        {/* CTA */}
        <AnimatedSection className="text-center mt-10">
          <p className="text-muted-foreground mb-4">Quer vender ou comprar um imóvel?</p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" })}
              className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
            >
              Fale conosco
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </button>
          </div>
        </AnimatedSection>
      </div>

      {lightboxImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setLightboxImage(null)}
        >
          <button
            className="absolute top-4 right-4 w-12 h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={() => setLightboxImage(null)}
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative max-w-4xl w-full" onClick={(e) => e.stopPropagation()}>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
              <Image
                src={lightboxImage.image || "/placeholder.svg"}
                alt={lightboxImage.title}
                fill
                className="object-cover"
              />
            </div>
            <div className="mt-4 text-center">
              <h3 className="text-xl font-semibold text-white">{lightboxImage.title}</h3>
              <p className="text-muted-foreground">{lightboxImage.location}</p>
              <span className="inline-block mt-2 bg-primary text-primary-foreground px-3 py-1 rounded text-sm font-semibold">
                Vendido
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
