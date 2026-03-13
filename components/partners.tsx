"use client"

import { AnimatedSection } from "@/components/animated-section"
import Image from "next/image"

const partners = [
  { name: "Minha Casa Minha Vida", logo: "/minha%20casa%20minha%20vida.jpg" },
  { name: "Casa Paulista", logo: "/casa%20paulista.png" },
  { name: "CRECI", logo: "/creci.png" },
  { name: "Caixa Econômica", logo: "/caixa%20logo%20of.png" },
  { name: "Bradesco", logo: "/bradesco.jpg" },
]

const certifications = ["CRECI Ativo", "Certificação Digital", "Seguro de Responsabilidade Civil"]

export function Partners() {
  return (
    <section className="py-12 px-4 bg-card/30 border-y border-primary/10">
      <div className="container mx-auto max-w-6xl">
        <AnimatedSection className="text-center mb-8">
          <span className="text-primary text-sm tracking-widest uppercase">Parceiros e Certificações</span>
        </AnimatedSection>

        {/* Bancos parceiros */}
        <AnimatedSection delay={100}>
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 mb-8">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="w-16 h-16 md:w-20 md:h-20 rounded-xl bg-card border border-primary/10 flex items-center justify-center text-muted-foreground font-bold text text md:text-sm hover:border-primary/30 transition-colors"
                title={partner.name}
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={64}
                  height={64}
                  className="object-contain w-full h-full"
                />
              </div>
            ))}
          </div>
        </AnimatedSection>

        {/* Certificações */}
        <AnimatedSection delay={200}>
          <div className="flex flex-wrap justify-center gap-4">
            {certifications.map((cert, index) => (
              <div
                key={index}
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-sm text-primary"
              >
                <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                {cert}
              </div>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
