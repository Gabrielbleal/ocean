"use client"

import Image from "next/image"

export function AnaliseCreditoButton() {
  const openAnalise = () => {
    window.open("/analise-credito", "_blank")
  }

  return (
    <button
      onClick={openAnalise}
      className="fixed bottom-5 right-44 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-300 shadow-lg transition-transform hover:scale-110 active:scale-95"
      aria-label="Análise de Crédito"
    >
      <Image src="/analise.png" alt="Análise de Crédito" width={32} height={32} />
    </button>
  )
}
