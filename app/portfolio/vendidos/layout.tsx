import { ReactNode } from "react";

import { Navbar } from "@/components/navbar";
import { WhatsAppButton } from "@/components/whatsapp-button";
import { AnaliseCreditoButton } from "@/components/analise-credito-button";
import { ExitPopup } from "@/components/exit-popup";

export default function ProjetosLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      {children}
      <WhatsAppButton />
      <AnaliseCreditoButton />
      <ExitPopup />
    </>
  );
}
