"use client"

import Image from "next/image"
import { useIntersection } from "@/hooks/use-intersection"
import { useCounter } from "@/hooks/use-counter"
import { AnimatedSection } from "@/components/animated-section"

export function About() {
  const { ref: statsRef, isVisible: statsVisible } = useIntersection()
  const count = useCounter(200, 2000, statsVisible)

  return (
    <section id="sobre" className="py-16 px-4 md:py-24 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Imagem */}
          <AnimatedSection className="relative order-2 lg:order-1">
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-primary/10">
              <Image src="/luxury-real-estate-office.jpg" alt="Escritório OCEAN S&I" fill className="object-cover" />
            </div>
            <div
              ref={statsRef}
              className="absolute -bottom-4 -right-4 sm:-bottom-6 sm:-right-6 bg-card rounded-xl border border-primary/20 p-4 shadow-xl"
            >
              <div className="text-3xl sm:text-4xl font-bold text-primary">{count}+</div>
              <div className="text-xs sm:text-sm text-muted-foreground">Negócios realizados</div>
            </div>
          </AnimatedSection>

          {/* Texto */}
          <AnimatedSection className="space-y-6 order-1 lg:order-2" delay={200}>
            <div>
              <span className="text-primary text-sm tracking-widest uppercase">Quem Somos</span>
              <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-white leading-tight">
                Sua parceira em negócios imobiliários
              </h2>
            </div>

            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                A <span className="text-primary font-medium">OCEAN S&I</span> é uma corretora de imóveis com mais de 10
                anos de atuação no mercado, especializada em compra, venda e consultoria imobiliária.
              </p>
              <p>
                Nossa missão é conectar pessoas aos seus sonhos imobiliários com transparência, agilidade e atendimento
                personalizado. Atuamos principalmente na região metropolitana, com profundo conhecimento do mercado
                local.
              </p>
            </div>

            {/* Missão e Valores */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-card/50 border border-primary/10">
                <div className="text-primary font-semibold mb-1">Missão</div>
                <div className="text-sm text-muted-foreground">Realizar sonhos com segurança</div>
              </div>
              <div className="p-4 rounded-xl bg-card/50 border border-primary/10">
                <div className="text-primary font-semibold mb-1">Valores</div>
                <div className="text-sm text-muted-foreground">Ética, transparência e confiança</div>
              </div>
            </div>

            {/* CRECI */}
            <div className="flex items-center gap-2 pt-2 text-sm text-muted-foreground">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              CRECI: <span className="text-primary">049678-J</span>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
