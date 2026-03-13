import type React from "react"
import type { Metadata } from "next"
import { Playfair_Display, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
})
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
})

export const metadata: Metadata = {
  title: "OCEAN S&I | Negócios Imobiliários de Alto Padrão",
  description:
    "Corretora de imóveis especializada em vendas de alto padrão. Mais de 10 anos de experiência transformando sonhos em endereços. CRECI ativo.",
  keywords: ["imóveis", "corretora", "imobiliária", "alto padrão", "São Paulo", "comprar imóvel", "vender imóvel"],
  authors: [{ name: "OCEAN S&I" }],
  manifest: "/manifest.json",
  icons: {
    icon: "/logo-ocean.jpeg",
    apple: "/logo-ocean.jpeg",
  },
  openGraph: {
    title: "OCEAN S&I | Negócios Imobiliários de Alto Padrão",
    description: "Corretora de imóveis especializada em vendas de alto padrão. Mais de 10 anos de experiência.",
    type: "website",
    locale: "pt_BR",
    images: ["/logo-ocean.jpeg"],
  },
    generator: 'v0.app'
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#000000",
}

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: "OCEAN S&I Negócios Imobiliários",
  description: "Corretora de imóveis especializada em vendas de alto padrão",
  url: "https://oceansi.com.br",
  telephone: "+55-11-99999-9999",
  email: "ocean.imob25@gmail.com",
  address: {
    "@type": "PostalAddress",
    addressLocality: "São Paulo",
    addressRegion: "SP",
    addressCountry: "BR",
  },
  areaServed: {
    "@type": "City",
    name: "São Paulo",
  },
  priceRange: "$$$",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR" className="bg-black scroll-smooth">
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body className={`${playfair.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
