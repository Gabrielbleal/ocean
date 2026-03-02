"use client"

import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"

const navLinks = [
  { label: "Início", href: "#inicio" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Portfólio", href: "#vendas" },
  { label: "Contato", href: "#contato" },
]

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
    setIsMobileMenuOpen(false)
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-black shadow-lg shadow-black/50 py-2" : "bg-black/80 backdrop-blur-sm py-3"
      }`}
    >
      <div className="container mx-auto max-w-7xl px-4">
        <div className="flex items-center justify-between">
          <a href="#inicio" onClick={(e) => handleLinkClick(e, "#inicio")} className="relative h-10 w-24 flex-shrink-0">
            <Image src="/logo-ocean.jpeg" alt="OCEAN S&I" fill className="object-contain" priority />
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="text-sm text-white/80 transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-4">
            <a href="tel:+5519991740548" className="text-sm text-white/70 hover:text-primary transition-colors">
              (19) 99174-0548
            </a>
            <Button
              onClick={() => document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" })}
              size="sm"
              className="bg-primary text-primary-foreground hover:bg-primary/90"
            >
              Fale Conosco
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 lg:hidden"
            aria-label="Menu"
          >
            <svg className="h-5 w-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden overflow-hidden transition-all duration-300 ${isMobileMenuOpen ? "max-h-[400px] mt-4" : "max-h-0"}`}
        >
          <div className="rounded-xl bg-card/95 backdrop-blur-sm p-4 space-y-1 border border-primary/10">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="block py-3 px-4 rounded-lg text-center text-white/80 transition-colors hover:text-primary hover:bg-primary/5"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-3 border-t border-primary/10 mt-2">
              <Button
                onClick={() => {
                  document.querySelector("#contato")?.scrollIntoView({ behavior: "smooth" })
                  setIsMobileMenuOpen(false)
                }}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Fale Conosco
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
