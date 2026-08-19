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
  { image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2015%20de%20ago.%20de%202026%2C%2000_59_21-cIoWLKv2beJwza1QekI5GJnzpxB4G9.webp', title: 'Treino 076 — Ponto de impulsão antes da barreira' },
  { image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2015%20de%20ago.%20de%202026%2C%2000_45_15-TVjIJTbTW49r32lvVzT1uJHfNYHZNJ.webp', title: 'Treino 010 — Circuito técnico de corrida' },
  { image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2015%20de%20ago.%20de%202026%2C%2017_40_25-qGyLAqxCaRcuJKzvBeF4T0Uelcef6t.webp', title: 'Treino 108 — Técnica de voo em suspensão' },
  { image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2015%20de%20ago.%20de%202026%2C%2017_42_12-I5I6tz1OzQM9IUXUQamiryMVFb6jzE.webp', title: 'Treino 199 — Desafio integrado de performance' },
  { image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2015%20de%20ago.%20de%202026%2C%2017_42_31-tTpZJOVahxHOasq0UFHmEtnw63SNRb.webp', title: 'Treino 186 — Circuito geral do atletismo' },
  { image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2015%20de%20ago.%20de%202026%2C%2000_49_39-s2kk0f05fmCkmx9wXHGnyIr0GK98oZ.webp', title: 'Treino 031 — Os primeiros cinco passos' },
  { image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2015%20de%20ago.%20de%202026%2C%2017_35_29-7dPwxH4zD9CIr0j1p52VT8R2OOt3hi.webp', title: 'Treino 145 — Desafio final do salto triplo' },
  { image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2015%20de%20ago.%20de%202026%2C%2017_40_48-7HYusgrIKuaYEFpJShDpSWYQ39FRw6.webp', title: 'Treino 109 — Aterrissagem com os dois pés' },
];

const carrossel2 = [
  { image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2015%20de%20ago.%20de%202026%2C%2017_38_21-keXfxm4NLeFd514npT2mTM4P0YMlkm.webp', title: 'Treino 125 — Penúltimo e último passo' },
  { image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2015%20de%20ago.%20de%202026%2C%2000_51_30-4zb9UwTGBwKhZVtjDMgvCNonWerTa6.webp', title: 'Treino 044 — Aceleração na curva' },
  { image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2015%20de%20ago.%20de%202026%2C%2000_55_16-6piIYwn6kurGzS5QACdewP60Ydl2b4.webp', title: 'Treino 070 — Sessão integrada de resistência e ritmo' },
  { image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2015%20de%20ago.%20de%202026%2C%2017_39_08-ocinzkKqsgKGRPwegEpRLgCbBy0QJL.webp', title: 'Treino 115 — Passada no ar' },
  { image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2015%20de%20ago.%20de%202026%2C%2000_44_38-GHh7pcyj89GnjujAxa9TLG7Vmv10Iq.webp', title: 'Treino 003 — Postura e alinhamento na corrida' },
  { image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2015%20de%20ago.%20de%202026%2C%2000_51_50-kCgoVhMueZ7ePdoGjrlBMEiNaJ6RNy.webp', title: 'Treino 042 — Amplitude progressiva de passada' },
  { image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2015%20de%20ago.%20de%202026%2C%2017_37_56-IIJ5kvTUAJRQSQAXJRnAGGixmbiDh9.webp', title: 'Treino 122 — Identificação da perna de impulsão' },
  { image: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/ChatGPT%20Image%2015%20de%20ago.%20de%202026%2C%2000_47_10-ZbaXbkfTpwcxvFzGABDwBVDuqhWRJ2.webp', title: 'Treino 021 — Desaceleração controlada' },
];

export default function Page() {
  const offerRef = useRef<HTMLDivElement>(null);
  const handleCtaClick = () => offerRef.current?.scrollIntoView({ behavior: 'smooth' });
  return (
    <main className="min-h-screen bg-background pt-14 sm:pt-16 md:pt-20">
      <TopBar />
      <HeroSection onCtaClick={handleCtaClick} />
      <BeforeAfterSection />
      <ProductCarousel title="Conheça os Treinos por Dentro" subtitle="Páginas visuais com objetivo, duração, execução, diagrama e progressão." items={carrossel1} />
      <HowItWorks />
      <WhatYouGet />
      <ProductCarousel title="UM TREINO PARA DIFERENTES NÍVEIS" subtitle="Consulte durante a preparação e adapte cada sessão ao seu público." items={carrossel2} reverse={true} />
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
