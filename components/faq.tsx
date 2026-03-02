"use client"

import { useState } from "react"
import { AnimatedSection } from "@/components/animated-section"

const faqs = [
  {
    question: "Quais documentos preciso para comprar um imóvel?",
    answer:
      "Para compra, você precisará de RG, CPF, comprovante de renda, comprovante de residência e certidões negativas. Se for financiar, o banco pode solicitar documentos adicionais como holerites e declaração de IR.",
  },
  {
    question: "Qual o prazo médio para finalizar uma venda?",
    answer:
      "O prazo varia de acordo com a modalidade de pagamento. Vendas à vista podem ser concluídas em 30 a 45 dias. Com financiamento bancário, o processo leva em média 60 a 90 dias.",
  },
  {
    question: "A OCEAN S&I cobra taxa de assessoria?",
    answer:
      "Nossa comissão é cobrada apenas do vendedor, seguindo os padrões do mercado imobiliário. O comprador não paga nenhuma taxa de assessoria para nossos serviços.",
  },
  {
    question: "Vocês ajudam com financiamento imobiliário?",
    answer:
      "Sim! Temos parceria com os principais bancos e auxiliamos em todo o processo de financiamento, desde a simulação até a aprovação final do crédito.",
  },
  {
    question: "Como funciona a avaliação do meu imóvel?",
    answer:
      "Realizamos uma análise completa do seu imóvel considerando localização, metragem, estado de conservação e valores praticados na região. A avaliação é gratuita e sem compromisso.",
  },
]

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-16 px-4 md:py-24 bg-background">
      <div className="container mx-auto max-w-3xl">
        <AnimatedSection className="text-center mb-12">
          <span className="text-primary text-sm tracking-widest uppercase">Dúvidas Frequentes</span>
          <h2 className="mt-2 text-2xl sm:text-3xl md:text-4xl font-bold text-white">Perguntas e Respostas</h2>
        </AnimatedSection>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <AnimatedSection key={index} delay={index * 50}>
              <div className="rounded-xl border border-primary/10 bg-card/50 overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-5 py-4 flex items-center justify-between text-left"
                >
                  <span className="font-medium text-white pr-4">{faq.question}</span>
                  <svg
                    className={`h-5 w-5 text-primary flex-shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${openIndex === index ? "max-h-96" : "max-h-0"}`}
                >
                  <p className="px-5 pb-4 text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  )
}
