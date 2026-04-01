"use client"

import Image from "next/image"
import Link from "next/link"
import { AnimatedSection } from "@/components/animated-section"

const sales = [
  { id: 9, title: "Splend Home Club, Hortolândia", location: "Hortolândia, SP", image: "/projetos/Splend/0CDC54D8-90F4-4E0A-89B7-5ADDBA6B850F.png" },
  { id: 1, title: "Viva Parque Sense, Indaiatuba", location: "Indaiatuba, SP", image: "/projetos/viva-parque-sense/ChatGPT Image 28 de mar. de 2026, 00_08_25.png" },
  { id: 2, title: "ONI Inglaterra, Sumaré", location: "Alphaville, Barueri", image: "/projetos/oniinglaterra/oni_inglaterra.JPEG" },
  { id: 4, title: "Vem Viver Ares, Campinas", location: "Campinas", image: "/projetos/vemviverares/vemviverares2.jpeg" },
  { id: 5, title: "Reserva Laguna, Indaiatuba", location: "Indaiatuba, SP", image: "/projetos/novolarlaguna/C9FC0190-07DD-4315-BF00-7B85AE4F92D0.png" },
  { id: 8, title: "Ecovila Tulipa, Hortolândia", location: "Hortolândia, SP", image: "/projetos/ecovila-tulipa/0E82AC47-9C14-4DDF-8404-BFEA617A866D (1).jpeg" },
]

export function Gallery() {


  return (
    <section id="vendas" className="py-16 px-4 md:py-24 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <span className="text-primary text-sm tracking-widest uppercase">Portfólio</span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-white">Projetos Em Destaque</h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Empreendimentos que selecionamos<br />
            para quem busca morar bem ou investir com segurança.
          </p>
        </AnimatedSection>

        {/* Grid responsivo */}
        <div className="grid gap-4 grid-cols-2 lg:grid-cols-3">
          {sales.map((sale, index) => (
            <AnimatedSection key={sale.id} delay={index * 100}>
              <Link
                href={`/portfolio/vendidos/${sale.id === 1 ? "viva-parque-sense" : sale.id === 9 ? "Splend" : sale.id === 8 ? "ecovila-tulipa" : `projeto-${sale.id}`}`}
                className="group relative overflow-hidden rounded-xl border border-primary/10 bg-card w-full text-left"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={sale.image || "/placeholder.svg"}
                    alt={sale.title}
                    fill
                    className={`object-cover transition-transform duration-500 ${sale.id === 3 ? 'group-hover:scale-102' : 'group-hover:scale-105'}`}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute top-3 right-3 bg-primary text-primary-foreground px-2 py-1 rounded text-xs font-semibold">
                    Disponível
                  </div>
                  <div className="absolute bottom-3 left-3 right-3">
                    <span className="block text-lg font-bold text-white drop-shadow-md bg-black/40 rounded px-2 py-1">
                      {sale.title}
                    </span>
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
              </Link>
            </AnimatedSection>
          ))}
        </div>

        {/* Botão Ver mais */}
        <div className="flex justify-center mt-8">
          <button
            className="bg-primary text-primary-foreground px-8 py-3 rounded-lg shadow-lg hover:bg-primary/90 transition-all text-lg font-semibold"
            type="button"
            disabled
            title="Em breve você poderá ver mais imóveis do portfólio."
          >
            Ver mais
          </button>
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


    </section>
  )
}
