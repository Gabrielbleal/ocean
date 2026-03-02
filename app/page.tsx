import { Navbar } from "@/components/navbar"
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
import { ExitPopup } from "@/components/exit-popup"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <About />
      <Gallery />
      <Services />
      <Differentials />
      <Partners />
      <WhatsAppCTA />
      <FAQ />
      <ContactForm />
      <Footer />
      <WhatsAppButton />
      <ExitPopup />
    </main>
  )
}
