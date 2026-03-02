"use client"

import { AnimatedSection } from "@/components/animated-section"

const services = [
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
        />
      </svg>
    ),
    title: "Compra de Imóveis",
    description: "Encontramos o imóvel ideal para você com base em suas necessidades e orçamento.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
    title: "Venda de Imóveis",
    description: "Estratégias de marketing e avaliação de mercado para vender seu imóvel rapidamente.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
    title: "Aluguel",
    description: "Administração de locações com segurança jurídica para proprietários e inquilinos.",
  },
  {
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
        />
      </svg>
    ),
    title: "Consultoria",
    description: "Orientação especializada para investimentos e decisões imobiliárias.",
  },
]

export function Services() {
  return (
    <section id="servicos" className="py-16 px-4 md:py-24 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        {/* Header */}
        <AnimatedSection className="text-center mb-12">
          <span className="text-primary text-sm tracking-widest uppercase">Serviços</span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-white">O que oferecemos</h2>
          <p className="mt-3 text-muted-foreground max-w-lg mx-auto">
            Soluções completas para todas as suas necessidades imobiliárias
          </p>
        </AnimatedSection>

        {/* Grid de Serviços */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, index) => (
            <AnimatedSection key={index} delay={index * 100}>
              <div className="p-6 rounded-xl border border-primary/10 bg-card/50 transition-all hover:border-primary/30 h-full">
                <div className="mb-4 inline-flex items-center justify-center w-12 h-12 rounded-lg bg-primary/10 text-primary">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
