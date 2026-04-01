"use client";
import React, { useState, useRef } from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselPrevious, CarouselNext } from './carousel';

interface CarouselImagesProps {
  images: string[];
  onLightboxOpenChange?: (open: boolean) => void;
}


const CarouselImages: React.FC<CarouselImagesProps> = ({ images, onLightboxOpenChange }) => {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [current, setCurrent] = useState(0);

  const openLightbox = (idx: number) => {
    setCurrent(idx);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    onLightboxOpenChange?.(true);
  };
  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
    onLightboxOpenChange?.(false);
  };
  const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1));

  // Swipe handlers para mobile
  const startX = useRef<number | null>(null);
  const handleTouchStart = (e: React.TouchEvent) => {
    startX.current = e.touches[0].clientX;
  };
  const handleTouchEnd = (e: React.TouchEvent) => {
    if (startX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - startX.current;
    if (deltaX > 50) prev();
    if (deltaX < -50) next();
    startX.current = null;
  };

  return (
    <>
      <div className="relative w-full max-w-2xl mx-auto">
        <Carousel>
          <CarouselContent>
            {images.map((src, idx) => (
              <CarouselItem key={idx}>
                <img
                  src={src}
                  alt={`Foto ${idx + 1}`}
                  className={
                    src.includes('D7F8ED88-445A-479E-84A7-91AC5A4D6D60.jpeg')
                      ? 'w-full aspect-video sm:h-80 object-cover rounded-lg cursor-pointer'
                      : 'w-full aspect-[4/3] sm:h-80 object-cover rounded-lg cursor-pointer'
                  }
                  onClick={() => openLightbox(idx)}
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
      {lightboxOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 px-2 sm:px-0"
          onClick={closeLightbox}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <button
            className="absolute top-2 right-2 sm:top-4 sm:right-4 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={closeLightbox}
            aria-label="Fechar"
            type="button"
          >
            <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <button
            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={e => { e.stopPropagation(); prev(); }}
            aria-label="Anterior"
            type="button"
          >
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <img
            src={images[current]}
            alt={`Foto ${current + 1}`}
            className="max-h-[70vh] sm:max-h-[90vh] max-w-full sm:max-w-[90vw] rounded-lg shadow-2xl object-contain"
            onClick={e => e.stopPropagation()}
          />
          <button
            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
            onClick={e => { e.stopPropagation(); next(); }}
            aria-label="Próxima"
            type="button"
          >
            <svg className="h-8 w-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      )}
    </>
  );
};

export default CarouselImages;
