'use client';

import { useRef } from 'react';
import { TopBar } from '@/components/top-bar';
import { HeroSection } from '@/components/hero-section';
import { BeforeAfterSection } from '@/components/before-after-section';
import { ProductCarousel } from '@/components/product-carousel';
import { HowItWorks } from '@/components/how-it-works';
import { WhatYouGet } from '@/components/what-you-get';
import { ForWhomSection } from '@/components/for-whom-section';
import { BonusSection } from '@/components/bonus-section';
import { OfferSection } from '@/components/offer-section';
import { Testimonials } from '@/components/testimonials';
import { Guarantee } from '@/components/guarantee';
import { FAQ } from '@/components/faq';
import { FinalCta } from '@/components/final-cta';
import { Footer } from '@/components/footer';

const carrossel1 = [
  { image: '/images/treinos/treino-011.png', title: 'Treino 011 — Reflexo em curta distância' },
  { image: '/images/treinos/treino-021.png', title: 'Treino 021 — Queda lateral básica' },
  { image: '/images/treinos/treino-032.png', title: 'Treino 032 — Fechamento de ângulo básico' },
  { image: '/images/treinos/treino-045.png', title: 'Treino 045 — Cruzamento curto na pequena área' },
  { image: '/images/treinos/treino-051.png', title: 'Treino 051 — Fechamento de ângulo no 1x1' },
  { image: '/images/treinos/treino-061.png', title: 'Treino 061 — Passe curto com precisão' },
  { image: '/images/treinos/treino-072.png', title: 'Treino 072 — Reflexo + segunda defesa' },
  { image: '/images/treinos/treino-080.png', title: 'Treino 080 — Circuito completo do goleiro' },
];

const carrossel2 = [
  { image: '/images/categorias/sub-7.png', title: 'Sub-7 — Iniciação ao goleiro' },
  { image: '/images/categorias/sub-9.png', title: 'Sub-9 — Fundamentos e coordenação' },
  { image: '/images/categorias/sub-11.png', title: 'Sub-11 — Quedas e defesas' },
  { image: '/images/categorias/sub-13.png', title: 'Sub-13 — Posicionamento e reação' },
  { image: '/images/categorias/sub-15.png', title: 'Sub-15 — Saídas e bolas aéreas' },
  { image: '/images/categorias/sub-17.png', title: 'Sub-17 — Situações de jogo' },
];

export default function Page() {
  const offerRef = useRef<HTMLDivElement>(null);
  const handleCtaClick = () => offerRef.current?.scrollIntoView({ behavior: 'smooth' });
  return (
    <main className="min-h-screen pt-14 sm:pt-16 md:pt-20" style={{ backgroundColor: '#003F2D' }}>
      <TopBar />
      <HeroSection onCtaClick={handleCtaClick} />
      <BeforeAfterSection />
      <ProductCarousel title="Conheça os Treinos por Dentro" subtitle="Páginas visuais com objetivo, categoria indicada, nível, duração, materiais, montagem, execução, progressões, correções e diagrama." items={carrossel1} />
      <HowItWorks />
      <WhatYouGet />
      <ProductCarousel title="UM MATERIAL PARA DIFERENTES CATEGORIAS" subtitle="Consulte a indicação de cada treino e faça adaptações conforme idade, experiência e nível técnico dos goleiros." items={carrossel2} reverse={true} />
      <ForWhomSection />
      <Testimonials />
      <BonusSection />
      <div ref={offerRef} id="checkout"><OfferSection onCtaClick={handleCtaClick} /></div>
      <Guarantee />
      <FAQ />
      <FinalCta />
      <Footer />
    </main>
  );
}
