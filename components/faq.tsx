'use client';

import { useState } from 'react';

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqItems = [
    {
      q: 'Para quem os 200 treinos são indicados?',
      a: 'O material é indicado para treinadores, professores, instrutores e praticantes que desejam mais variedade e organização nos treinos de atletismo.',
    },
    {
      q: 'Os treinos servem para diferentes níveis?',
      a: 'Sim. O material apresenta adaptações para infantil, juvenil, adulto e avançado, permitindo ajustar volume e dificuldade conforme cada público.',
    },
    {
      q: 'Preciso de uma pista oficial ou equipamentos específicos?',
      a: 'Não. Muitos treinos podem ser realizados em campos, quadras, parques e outros espaços adequados. Cada página informa o espaço e os materiais necessários, e algumas modalidades podem exigir equipamentos específicos.',
    },
    {
      q: 'Como recebo e acesso o material?',
      a: 'O material é 100% digital. Após a confirmação do pagamento, você receberá o acesso pelo WhatsApp ou e-mail e poderá consultar pelo celular, tablet ou computador.',
    },
    {
      q: 'O pagamento é único?',
      a: 'Sim. Você paga apenas R$ 19,90 uma única vez, sem mensalidade ou cobranças recorrentes.',
    },
    {
      q: 'Como funciona a garantia de 7 dias?',
      a: 'Você terá 7 dias para conhecer os treinos e os bônus. Se o conteúdo não atender às suas expectativas, poderá solicitar o reembolso dentro desse prazo.',
    },
  ];

  return (
    <section className="w-full py-14 px-0 bg-background">
      <div className="mobile-content">
        <h2
          className="font-grotesk text-center uppercase"
          style={{ color: '#17191C', fontSize: '32px', fontWeight: 700, marginBottom: '28px', lineHeight: 1.2 }}
        >
          Perguntas Frequentes
        </h2>

        <div className="flex flex-col" style={{ gap: '10px' }}>
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #DED9D1',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 5px 14px rgba(23, 25, 28, 0.05)',
                  width: '100%',
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full flex items-start justify-between transition-colors"
                  style={{ padding: '19px 18px' }}
                  aria-expanded={isOpen}
                >
                  <span
                    className="text-left"
                    style={{
                      color: '#17191C',
                      fontSize: '15px',
                      fontWeight: 700,
                      lineHeight: 1.35,
                      paddingRight: '14px',
                    }}
                  >
                    {item.q}
                  </span>
                  <span
                    className="transition-transform duration-200"
                    style={{
                      color: '#F0642D',
                      fontSize: '20px',
                      fontWeight: 700,
                      flexShrink: 0,
                      lineHeight: 1,
                      marginTop: '1px',
                    }}
                  >
                    {isOpen ? '\u2212' : '+'}
                  </span>
                </button>

                <div
                  className="transition-all duration-200 ease-in-out"
                  style={{
                    maxHeight: isOpen ? '400px' : '0px',
                    opacity: isOpen ? 1 : 0,
                    overflow: 'hidden',
                  }}
                >
                  <div
                    style={{
                      borderTop: '1px solid #EEEAE3',
                      backgroundColor: '#FFFDF9',
                      padding: '19px 18px',
                    }}
                  >
                    <p
                      className="text-left"
                      style={{ color: '#4E5358', fontSize: '15px', lineHeight: 1.6 }}
                    >
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
