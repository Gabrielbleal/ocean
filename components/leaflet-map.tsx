"use client"
import { useEffect, useRef } from "react"

export function LeafletMap() {
  const mapRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    // Carrega o CSS do Leaflet
    const leafletCss = document.createElement("link")
    leafletCss.rel = "stylesheet"
    leafletCss.href = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
    leafletCss.integrity = "sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
    leafletCss.crossOrigin = ""
    document.head.appendChild(leafletCss)

    // Carrega o JS do Leaflet
    const script = document.createElement("script")
    script.src = "https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
    script.integrity = "sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo="
    script.crossOrigin = ""
    script.async = true
    script.onload = () => {
      if (!mapRef.current) return
      // @ts-ignore
      const L = window.L
      const map = L.map(mapRef.current).setView([-22.90, -47.06], 10)
      L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 19,
        attribution: "&copy; OpenStreetMap contributors"
      }).addTo(map)
      const apartamentos = [
        {
          nome: "Viva Parque Sense",
          cidade: "Indaiatuba - SP",
          bairro: "",
          preco: "",
          lat: -23.059365549581056,
          lng: -47.21344157546773,
          link: "/portfolio/vendidos/viva-parque-sense"
        },
        {
          nome: "ONI Inglaterra",
          cidade: "Sumaré - SP",
          bairro: "",
          preco: "",
          lat: -22.819524075384635,
          lng: -47.28820202883552,
          link: "/portfolio/vendidos/projeto-2" // Corrigir para rota amigável se existir
        },
        {
          nome: "Vem Viver Ares",
          cidade: "Campinas - SP",
          bairro: "",
          preco: "",
          lat: -22.938702211488103,
          lng: -47.16640609180981,
          link: "/portfolio/vendidos/projeto-4"
        },
        {
          nome: "Reserva Laguna (NovaLarLaguna)",
          cidade: "Campinas - SP",
          bairro: "",
          preco: "",
          lat: -23.077407175498443,
          lng: -47.22536687054517,
          link: "/portfolio/vendidos/projeto-5"
        },
        {
          nome: "Splend Home Club, Hortolândia",
          cidade: "Hortolândia - SP",
          bairro: "",
          preco: "",
          lat: -22.887122983978504,
          lng: -47.23091819320736,
          link: "/portfolio/vendidos/Splend"
        },
        {
          nome: "Ecovila Tulipa, Hortolândia",
          cidade: "Hortolândia - SP",
          bairro: "",
          preco: "",
          lat: -22.874751875002627,
          lng: -47.20765669320917,
          link: "/portfolio/vendidos/ecovila-tulipa"
        }
      ]
      const markersGroup = L.featureGroup().addTo(map)
      apartamentos.forEach((ap) => {
        const popupContent = `
          <div class='popup-card'>
            <h3>${ap.nome}</h3>
            <p><strong>Cidade:</strong> ${ap.cidade}</p>
            <p><strong>Bairro:</strong> ${ap.bairro}</p>
            <a href='${ap.link}' target='_blank' rel='noopener noreferrer'>Ver apartamento</a>
          </div>
        `
        L.marker([ap.lat, ap.lng])
          .addTo(markersGroup)
          .bindPopup(popupContent)
      })
      if (apartamentos.length > 0) {
        map.fitBounds(markersGroup.getBounds(), { padding: [50, 50] })
      }
    }
    document.body.appendChild(script)
    // Limpeza
    return () => {
      if (mapRef.current) mapRef.current.innerHTML = ""
      document.body.removeChild(script)
      document.head.removeChild(leafletCss)
    }
  }, [])

  return (
    <div style={{ width: "100%", height: 600, borderRadius: 12, overflow: "hidden" }}>
      <div ref={mapRef} style={{ width: "100%", height: "100%" }} />
      <style>{`
        .popup-card { min-width: 220px; }
        .popup-card h3 { margin: 0 0 8px; font-size: 16px; }
        .popup-card p { margin: 4px 0; font-size: 14px; color: #444; }
        .popup-card a { display: inline-block; margin-top: 10px; padding: 10px 14px; background: #0f172a; color: #fff; text-decoration: none; border-radius: 8px; font-size: 14px; }
        .popup-card a:hover { opacity: 0.9; }
      `}</style>
    </div>
  )
}
