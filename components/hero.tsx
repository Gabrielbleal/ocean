"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"

export function Hero() {
  const scrollToContact = () => {
    document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <section id="inicio" className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-black to-black/95" />

      <div className="absolute bottom-0 left-0 w-full h-[50%] overflow-hidden pointer-events-none">
        {/* Ondas de fundo - linhas suaves distantes */}
        <svg
          className="absolute bottom-[40%] w-[200%] h-auto animate-wave-drift-slow opacity-20"
          viewBox="0 0 1400 100"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0,50 C100,30 200,70 300,50 C400,30 500,70 600,50 C700,30 800,70 900,50 C1000,30 1100,70 1200,50 C1300,30 1400,70 1400,50"
            stroke="#D4AF37"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M0,60 C100,45 200,75 300,60 C400,45 500,75 600,60 C700,45 800,75 900,60 C1000,45 1100,75 1200,60 C1300,45 1400,75 1400,60"
            stroke="#D4AF37"
            strokeWidth="0.8"
            fill="none"
            strokeLinecap="round"
            opacity="0.5"
          />
        </svg>

        {/* Onda intermediária com mais detalhes */}
        <svg
          className="absolute bottom-[28%] w-[200%] h-auto animate-wave-drift-medium opacity-40"
          viewBox="0 0 1400 120"
          preserveAspectRatio="none"
          fill="none"
        >
          {/* Linha principal */}
          <path
            d="M0,80 C50,70 80,60 120,70 C160,80 200,60 260,50 C320,40 360,60 420,75 C480,90 540,80 600,70 C660,60 700,50 760,55 C820,60 860,75 920,80 C980,85 1020,70 1080,60 C1140,50 1180,65 1240,75 C1300,85 1350,75 1400,70"
            stroke="url(#goldGradientMid)"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
          />
          {/* Linha de acompanhamento */}
          <path
            d="M0,90 C50,82 80,75 120,82 C160,90 200,75 260,68 C320,60 360,78 420,88 C480,98 540,90 600,82 C660,74 700,68 760,72 C820,76 860,88 920,92 C980,96 1020,85 1080,78 C1140,70 1180,82 1240,90 C1300,98 1350,90 1400,85"
            stroke="#D4AF37"
            strokeWidth="0.8"
            fill="none"
            strokeLinecap="round"
            opacity="0.4"
          />
          <defs>
            <linearGradient id="goldGradientMid" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#F4E4A6" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.3" />
            </linearGradient>
          </defs>
        </svg>

        {/* Onda principal detalhada - estilo da imagem de referência */}
        <svg
          className="absolute bottom-[8%] w-[200%] h-auto animate-wave-drift-fast"
          viewBox="0 0 1600 280"
          preserveAspectRatio="none"
          fill="none"
        >
          {/* === PRIMEIRA ONDA QUEBRANDO === */}

          {/* Linha mais externa - fluxo da onda */}
          <path
            d="M0,180 
               C40,175 80,165 120,150
               C160,135 190,115 220,95
               C250,75 275,55 305,45
               C335,35 365,35 395,50
               C425,65 445,90 470,115
               C495,140 520,160 560,175
               C600,190 650,195 700,190"
            stroke="url(#goldMain)"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />

          {/* Linha interna - define a curva da crista */}
          <path
            d="M80,170
               C120,160 150,145 180,125
               C210,105 235,85 265,70
               C295,55 325,50 355,55
               C385,60 410,80 435,105
               C460,130 480,155 510,170"
            stroke="url(#goldMain)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />

          {/* Crista curvando - o "tubo" da onda */}
          <path
            d="M200,105
               C220,85 245,68 275,58
               C305,48 335,48 360,58
               C385,68 400,85 405,105"
            stroke="url(#goldHighlight)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />

          {/* Linha da crista caindo - espiral interna */}
          <path
            d="M270,60
               C290,55 315,55 340,62
               C365,70 382,85 390,100
               C395,110 392,120 385,128
               C378,136 365,140 350,138"
            stroke="url(#goldHighlight)"
            strokeWidth="1.8"
            fill="none"
            strokeLinecap="round"
          />

          {/* Detalhe interno do tubo */}
          <path
            d="M300,68
               C320,65 340,68 358,78
               C375,88 385,102 382,115"
            stroke="#D4AF37"
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
            opacity="0.7"
          />

          {/* Linha de espuma no topo */}
          <path
            d="M220,92 C240,78 265,65 295,58 C325,51 355,52 380,62"
            stroke="#F4E4A6"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
            opacity="0.6"
          />

          {/* Pequenos detalhes de movimento d'água */}
          <path
            d="M420,125 C440,120 455,125 470,135"
            stroke="#D4AF37"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
            opacity="0.5"
          />
          <path
            d="M500,165 C520,158 535,162 550,172"
            stroke="#D4AF37"
            strokeWidth="0.8"
            fill="none"
            strokeLinecap="round"
            opacity="0.4"
          />
          <path
            d="M140,160 C155,152 170,155 185,162"
            stroke="#D4AF37"
            strokeWidth="0.8"
            fill="none"
            strokeLinecap="round"
            opacity="0.4"
          />

          {/* === SEGUNDA ONDA QUEBRANDO === */}

          {/* Linha mais externa */}
          <path
            d="M700,190
               C740,185 780,175 820,160
               C860,145 890,125 920,105
               C950,85 975,65 1005,55
               C1035,45 1065,45 1095,60
               C1125,75 1145,100 1170,125
               C1195,150 1220,170 1260,185
               C1300,200 1350,205 1400,200"
            stroke="url(#goldMain)"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />

          {/* Linha interna */}
          <path
            d="M780,180
               C820,170 850,155 880,135
               C910,115 935,95 965,80
               C995,65 1025,60 1055,65
               C1085,70 1110,90 1135,115
               C1160,140 1180,165 1210,180"
            stroke="url(#goldMain)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />

          {/* Crista da segunda onda */}
          <path
            d="M900,115
               C920,95 945,78 975,68
               C1005,58 1035,58 1060,68
               C1085,78 1100,95 1105,115"
            stroke="url(#goldHighlight)"
            strokeWidth="2"
            fill="none"
            strokeLinecap="round"
          />

          {/* Espiral interna da segunda onda */}
          <path
            d="M970,70
               C990,65 1015,65 1040,72
               C1065,80 1082,95 1090,110
               C1095,120 1092,130 1085,138
               C1078,146 1065,150 1050,148"
            stroke="url(#goldHighlight)"
            strokeWidth="1.8"
            fill="none"
            strokeLinecap="round"
          />

          {/* Detalhe interno */}
          <path
            d="M1000,78
               C1020,75 1040,78 1058,88
               C1075,98 1085,112 1082,125"
            stroke="#D4AF37"
            strokeWidth="1.2"
            fill="none"
            strokeLinecap="round"
            opacity="0.7"
          />

          {/* Espuma no topo */}
          <path
            d="M920,102 C940,88 965,75 995,68 C1025,61 1055,62 1080,72"
            stroke="#F4E4A6"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
            opacity="0.6"
          />

          {/* Detalhes de movimento */}
          <path
            d="M1120,135 C1140,130 1155,135 1170,145"
            stroke="#D4AF37"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
            opacity="0.5"
          />
          <path
            d="M1200,175 C1220,168 1235,172 1250,182"
            stroke="#D4AF37"
            strokeWidth="0.8"
            fill="none"
            strokeLinecap="round"
            opacity="0.4"
          />

          {/* === TERCEIRA ONDA (parcial) === */}
          <path
            d="M1400,200
               C1440,195 1480,185 1520,170
               C1560,155 1590,135 1600,120"
            stroke="url(#goldMain)"
            strokeWidth="2.5"
            fill="none"
            strokeLinecap="round"
          />

          {/* Linha base de conexão suave */}
          <path
            d="M600,195 C650,200 680,198 700,190"
            stroke="#D4AF37"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            opacity="0.6"
          />
          <path
            d="M1300,200 C1350,205 1380,203 1400,198"
            stroke="#D4AF37"
            strokeWidth="1.5"
            fill="none"
            strokeLinecap="round"
            opacity="0.6"
          />

          <defs>
            <linearGradient id="goldMain" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#B8960C" stopOpacity="0.6" />
              <stop offset="25%" stopColor="#D4AF37" stopOpacity="1" />
              <stop offset="50%" stopColor="#F4E4A6" stopOpacity="1" />
              <stop offset="75%" stopColor="#D4AF37" stopOpacity="1" />
              <stop offset="100%" stopColor="#B8960C" stopOpacity="0.6" />
            </linearGradient>
            <linearGradient id="goldHighlight" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#D4AF37" stopOpacity="0.8" />
              <stop offset="50%" stopColor="#F4E4A6" stopOpacity="1" />
              <stop offset="100%" stopColor="#D4AF37" stopOpacity="0.8" />
            </linearGradient>
          </defs>
        </svg>

        {/* Ondas pequenas na base - espuma */}
        <svg
          className="absolute bottom-0 w-[200%] h-auto animate-wave-drift-slow opacity-30"
          viewBox="0 0 1400 50"
          preserveAspectRatio="none"
          fill="none"
        >
          <path
            d="M0,30 C30,25 60,35 100,30 C140,25 170,35 210,30 C250,25 280,35 320,30 C360,25 400,35 450,30 C500,25 540,35 580,30 C620,25 660,35 700,30 C740,25 780,35 820,30 C860,25 900,35 940,30 C980,25 1020,35 1060,30 C1100,25 1140,35 1180,30 C1220,25 1260,35 1300,30 C1340,25 1370,35 1400,30"
            stroke="#D4AF37"
            strokeWidth="1"
            fill="none"
            strokeLinecap="round"
          />
          <path
            d="M0,40 C50,35 90,42 130,38 C170,34 210,42 250,38 C290,34 330,42 370,38 C410,34 450,42 490,38 C530,34 570,42 610,38 C650,34 690,42 730,38 C770,34 810,42 850,38 C890,34 930,42 970,38 C1010,34 1050,42 1090,38 C1130,34 1170,42 1210,38 C1250,34 1290,42 1330,38 C1370,34 1400,38 1400,38"
            stroke="#D4AF37"
            strokeWidth="0.6"
            fill="none"
            strokeLinecap="round"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* Conteúdo */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4 pt-16 pb-24">
        <div className="text-center max-w-3xl mx-auto">
          {/* Logo */}
          <div className="relative mx-auto mb-6 h-28 w-52 sm:h-36 sm:w-64 md:h-44 md:w-80">
            <Image
              src="/logo-ocean.jpeg"
              alt="OCEAN S&I - Negócios Imobiliários"
              fill
              className="object-contain"
              priority
            />
          </div>

          {/* Tagline */}
          <p className="text-sm sm:text-base text-primary/80 tracking-[0.2em] mb-4 uppercase">Negócios Imobiliários</p>

          {/* Headline principal */}
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-light mb-4 leading-tight text-balance">
            Transformamos sonhos em <span className="text-primary font-normal">endereços</span>
          </h1>

          {/* Descrição breve */}
          <p className="text-base sm:text-lg text-white/60 max-w-xl mx-auto mb-8 leading-relaxed">
            Especialistas em compra, venda e consultoria imobiliária com atendimento personalizado e mais de 10 anos de
            experiência.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-base w-full sm:w-auto min-h-[56px]"
            >
              <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
              Fale pelo WhatsApp
            </Button>
            <Button
              onClick={() => document.querySelector("#vendas")?.scrollIntoView({ behavior: "smooth" })}
              size="lg"
              variant="outline"
              className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-6 text-base w-full sm:w-auto min-h-[56px]"
            >
              Ver Portfólio
            </Button>
          </div>

          {/* Credenciais */}
          <div className="mt-12 flex flex-wrap justify-center gap-6 text-white/50 text-sm">
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              CRECI Ativo
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-1a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              +10 Anos
            </div>
            <div className="flex items-center gap-2">
              <svg className="h-4 w-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              +500 Clientes
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-6 left-1/2 z-10 -translate-x-1/2 hidden md:block">
        <button
          onClick={() => document.querySelector("#sobre")?.scrollIntoView({ behavior: "smooth" })}
          className="flex flex-col items-center gap-1 text-primary/50 hover:text-primary transition-colors"
        >
          <span className="text-xs tracking-widest">ROLAR</span>
          <svg className="h-5 w-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </button>
      </div>
    </section>
  )
}
