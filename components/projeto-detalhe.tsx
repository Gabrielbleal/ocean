"use client";
import React from 'react';
import CarouselImages from './ui/carousel-images';
import { LeafletMap } from './leaflet-map';

const projetos = [
    {
      id: 9,
      nome: 'Splend Home Club, Hortolândia',
      descricao: `O EXTRAORDINÁRIO EM CADA DETALHE!\n\nO Splend Home Club, em Hortolândia, foi pensado para quem deseja viver com mais conforto, praticidade e exclusividade.\nUm verdadeiro oásis urbano, onde lazer, segurança e bem-estar se encontram em perfeita harmonia.\n\nLocalização estratégica:\n* 1 minuto do IASP\n* 1 minuto do Arena Atacado\n* 2 minutos da Rodovia SP-101\n* 2 minutos do McDonald's\n* 2 minutos da Av. Olívio Franceschini\n\nUm condomínio que transforma a rotina em uma experiência extraordinária.\n* Mais de 30 itens de lazer.\nPlantas de 2 e 3 dormitórios com suíte e varanda gourmet.\n2 elevadores por torre.\n* 3 Torres de Térreo + 14 pavimentos\n\nSplend Home Club\nVenha viver o extraordinário todos os dias.`,
      fotos: [
        '/projetos/Splend/splend1.jpeg',
        '/projetos/Splend/splend2.jpeg',
        '/projetos/Splend/splend3.jpeg',
        '/projetos/Splend/splend4.jpeg',
        '/projetos/Splend/splend5.jpeg',
        '/projetos/Splend/splend6.jpeg',
        '/projetos/Splend/splend7.jpeg',
        '/projetos/Splend/splend8.jpeg',
        '/projetos/Splend/splend9.jpeg',
        '/projetos/Splend/splend10.jpeg',
        '/projetos/Splend/splend11.jpeg',
        '/projetos/Splend/splend12.jpeg',
        '/projetos/Splend/splend13.jpeg',
        '/projetos/Splend/splend14.jpeg',
        '/projetos/Splend/splend15.jpeg',
        '/projetos/Splend/splend16.jpeg',
        '/projetos/Splend/splend17.jpeg',
        '/projetos/Splend/splend18.jpeg',
        '/projetos/Splend/splend19.jpeg',
        '/projetos/Splend/splend20.jpeg',
        '/projetos/Splend/splend21.jpeg',
        '/projetos/Splend/splend22.jpeg',
        '/projetos/Splend/splend23.jpeg',
        '/projetos/Splend/splend24.jpeg',
        '/projetos/Splend/splend25.jpeg',
        '/projetos/Splend/splend26.jpeg',
        '/projetos/Splend/splend27.jpeg',
        '/projetos/Splend/splend28.jpeg',
        '/projetos/Splend/splend29.jpeg',
        '/projetos/Splend/splend30.jpeg',
      ],
      localizacao: {
        lat: -22.857,
        lng: -47.226,
        endereco: 'Hortolândia, SP',
      },
    },
  {
    id: 8,
    nome: 'Ecovila Tulipa, Hortolândia',
    descricao: 'Ecovila Tulipa: conforto, sustentabilidade e qualidade de vida em um só lugar.',
    fotos: [
      '/projetos/ecovila-tulipa/0E82AC47-9C14-4DDF-8404-BFEA617A866D (1).jpeg',
    ],
    localizacao: {
      lat: -22.874751875002627,
      lng: -47.20765669320917,
      endereco: 'Hortolândia, SP',
    },
  },
  {
    id: 7,
    nome: 'Reserva Laguna (NovaLarLaguna)',
    descricao: 'O Reserva Laguna é um empreendimento exclusivo em Campinas, oferecendo conforto, segurança e lazer completo para toda a família.',
    fotos: [
      '/projetos/novolarlaguna/C9FC0190-07DD-4315-BF00-7B85AE4F92D0.png',
    ],
    localizacao: {
      lat: -23.077407175498443,
      lng: -47.22536687054517,
      endereco: 'Campinas, SP',
    },
  },
  {
    id: 1,
    nome: 'Viva Parque Sense',
    descricao:
      'O Viva Parque Sense, em Indaiatuba, é o lugar ideal para quem busca mais do que um imóvel: um novo estilo de vida. Com um conceito exclusivo de lazer sensorial, o empreendimento foi pensado para proporcionar bem-estar em cada detalhe, unindo conforto, sofisticação e qualidade de vida.\n\nSão apartamentos modernos com até 3 dormitórios, varanda gourmet completa e plantas inteligentes que se adaptam ao seu dia a dia. Tudo isso dentro de um condomínio com mais de 30 opções de lazer e um parque privativo de 7.500 m², criando uma experiência única para você e sua família.\n\nLocalizado em uma das regiões que mais crescem na cidade, o Viva Parque Sense é a escolha perfeita para morar bem ou investir com alto potencial de valorização.\n\n👉 Viva mais. Sinta mais. Viva Parque Sense.',
    fotos: [
      '/projetos/viva-parque-sense/Principal.jpeg',
      '/projetos/viva-parque-sense/sense2.jpeg',
      '/projetos/viva-parque-sense/sense3.jpeg',
      '/projetos/viva-parque-sense/sense4.jpeg',
      '/projetos/viva-parque-sense/sense5.jpeg',
      '/projetos/viva-parque-sense/sense6.jpeg',
      '/projetos/viva-parque-sense/sense7.jpeg',
      '/projetos/viva-parque-sense/sense8.jpeg',
      '/projetos/viva-parque-sense/sense9.jpeg',
      '/projetos/viva-parque-sense/sense10.jpeg',
      '/projetos/viva-parque-sense/sense11.jpeg',
      '/projetos/viva-parque-sense/sense12.jpeg',
      '/projetos/viva-parque-sense/sense13.jpeg',
      '/projetos/viva-parque-sense/sense14.jpeg',
      '/projetos/viva-parque-sense/sense15.jpeg',
      '/projetos/viva-parque-sense/sense16.jpeg',
      '/projetos/viva-parque-sense/sense17.jpeg',
      '/projetos/viva-parque-sense/sense18.jpeg',
      '/projetos/viva-parque-sense/sense19.jpeg',
      '/projetos/viva-parque-sense/sense20.jpeg',
      '/projetos/viva-parque-sense/sense21.jpeg',
      '/projetos/viva-parque-sense/sense22.jpeg',
      '/projetos/viva-parque-sense/sense23.jpeg',
      '/projetos/viva-parque-sense/sense24.jpeg',
      '/projetos/viva-parque-sense/sense25.jpeg',
      '/projetos/viva-parque-sense/sense26.jpeg',
      '/projetos/viva-parque-sense/sense27.jpeg',
      '/projetos/viva-parque-sense/sense28.jpeg',
      '/projetos/viva-parque-sense/sense29.jpeg',
      '/projetos/viva-parque-sense/sense30.jpeg',
      '/projetos/viva-parque-sense/sense31.jpeg',
      '/projetos/viva-parque-sense/ultima.jpeg',
      '/projetos/viva-parque-sense/ChatGPT Image 28 de mar. de 2026, 00_08_25.png',
    ],
    localizacao: {
      lat: -23.059365549581056,
      lng: -47.21344157546773,
      endereco: 'Indaiatuba, SP',
    },
  },
  {
    id: 2,
    nome: 'ONI Inglaterra, Sumaré',
    descricao: `PECONI INGLATERRA

  INIGUALÁVEL EM TODOS OS ÂNGULOS

  No ponto mais alto da cidade, o ONI INGLATERRA se impõe como um novo ícone de exclusividade, sofisticação e imponência.

  Um projeto pensado para quem valoriza vista privilegiada, arquitetura marcante e uma experiência elevada de moradia.

  Com mais de 3.200m² de área de lazer, o empreendimento transforma o cotidiano em um novo padrão de viver bem.

  Duas torres exclusivas

  Torre Wembley
  Térreo + 18 pavimentos tipo + Rooftop

  Torre Wimbledon
  Térreo + 20 pavimentos tipo + Rooftop

  ✔ Plantas com ambientes amplos e bem planejados
  ✔ Localização privilegiada no Parque João de Vasconcelos
  ✔ Estrutura pensada para elevar sua experiência de morar

  ONI INGLATERRA
  Viva o melhor que a vida pode oferecer.`,
    fotos: ['/projetos/2/1.jpg', '/projetos/2/2.jpg', '/projetos/2/3.jpg'],
    localizacao: { lat: -23.551, lng: -46.634, endereco: 'Endereço 2, Cidade' },
  },
  {
    id: 3,
    nome: 'Apartamento 3',
    descricao: 'Descrição do Apartamento 3.',
    fotos: ['/projetos/3/1.jpg', '/projetos/3/2.jpg', '/projetos/3/3.jpg'],
    localizacao: { lat: -23.552, lng: -46.635, endereco: 'Endereço 3, Cidade' },
  },
  {
    id: 4,
    nome: 'Apartamento 4',
    descricao: 'Descrição do Apartamento 4.',
    fotos: ['/projetos/4/1.jpg', '/projetos/4/2.jpg', '/projetos/4/3.jpg'],
    localizacao: { lat: -23.553, lng: -46.636, endereco: 'Endereço 4, Cidade' },
  },
  {
    id: 5,
    nome: 'Apartamento 5',
    descricao: 'Descrição do Apartamento 5.',
    fotos: ['/projetos/5/1.jpg', '/projetos/5/2.jpg', '/projetos/5/3.jpg'],
    localizacao: { lat: -23.554, lng: -46.637, endereco: 'Endereço 5, Cidade' },
  },
  {
    id: 6,
    nome: 'Apartamento 6',
    descricao: 'Descrição do Apartamento 6.',
    fotos: ['/projetos/6/1.jpg', '/projetos/6/2.jpg', '/projetos/6/3.jpg'],
    localizacao: { lat: -23.555, lng: -46.638, endereco: 'Endereço 6, Cidade' },
  },
];

interface ProjetoDetalheProps {
  projetoId: number;
}

const ProjetoDetalhe: React.FC<ProjetoDetalheProps> = ({ projetoId }) => {
  const [lightboxOpen, setLightboxOpen] = React.useState(false);
  const projeto = projetos.find((p) => p.id === projetoId);
  if (!projeto) return <div>Projeto não encontrado.</div>;
  return (
    <div className="w-full flex flex-col items-center px-2 sm:px-4 py-4 max-w-3xl mx-auto pb-20">
      <h1 className="text-xl sm:text-2xl font-bold mb-4 text-center break-words w-full max-w-md sm:max-w-2xl mx-auto">{projeto.nome}</h1>
      <div className="w-full flex justify-center">
        <div className="w-full max-w-md sm:max-w-2xl flex flex-col items-center">
          <CarouselImages images={projeto.fotos} onLightboxOpenChange={setLightboxOpen} />
        </div>
      </div>
      <p className="my-4 text-base sm:text-lg whitespace-pre-line text-center sm:text-justify w-full max-w-md sm:max-w-2xl mx-auto">{projeto.descricao}</p>
      <div className="my-4 w-full max-w-md sm:max-w-2xl mx-auto flex flex-col items-center">
        <strong className="block text-center">Localização:</strong> <span className="block text-center mb-2">{projeto.localizacao.endereco}</span>
        {!lightboxOpen && (
          <div className="h-56 sm:h-64 mt-2 rounded-lg overflow-hidden w-full" style={{zIndex: 1, position: 'relative'}}>
            <LeafletMap />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjetoDetalhe;
