import Image from 'next/image';

function StarRow() {
  return (
    <div className="flex items-center gap-1" aria-label="Avaliação de 5 estrelas">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#F0642D" aria-hidden="true">
          <path d="M12 2.5l2.9 6.3 6.9.6-5.2 4.6 1.6 6.8-6.2-3.7-6.2 3.7 1.6-6.8-5.2-4.6 6.9-.6z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  const testimonials = [
    {
      quote:
        'Gostei principalmente da organização. Os treinos estão separados por objetivo e cada página mostra o que fazer, o volume e as pausas. Isso facilita bastante na hora de escolher e preparar o treinamento.',
      name: 'Matheus Oliveira',
      role: 'Treinador de atletismo — Goiânia/GO',
      photo: '/images/testimonials/matheus-oliveira.jpeg',
      objectPosition: '50% 32%',
    },
    {
      quote:
        'O material é muito visual e fácil de consultar. Os diagramas ajudam a entender a organização dos exercícios, e as adaptações por nível deixam os treinos mais fáceis de utilizar com diferentes públicos.',
      name: 'João Cardoso',
      role: 'Professor de Educação Física — Brasília/DF',
      photo: '/images/testimonials/joao-cardoso.jpeg',
      objectPosition: '50% 28%',
    },
    {
      quote:
        'Eu procurava novas opções para variar meus treinos sem precisar buscar exercícios em vários lugares. Agora consigo escolher o objetivo, consultar a orientação e acompanhar tudo diretamente pelo celular.',
      name: 'Amanda Moura',
      role: 'Corredora Amadora — São Paulo/SP',
      photo: '/images/testimonials/amanda-moura.jpeg',
      objectPosition: '50% 30%',
    },
  ];

  return (
    <section className="w-full py-16 md:py-24 lg:py-32" style={{ backgroundColor: '#FFFFFF' }}>
      <div className="mobile-content">
        <div className="flex flex-col items-center text-center gap-4 mb-12 md:mb-16">
          <h2 className="font-grotesk text-3xl sm:text-4xl md:text-5xl leading-tight text-pretty" style={{ color: '#17191C' }}>
            APROVADO POR QUEM VIVE O ATLETISMO
          </h2>
          <p className="text-sm sm:text-base md:text-lg leading-relaxed max-w-2xl" style={{ color: '#5E6267' }}>
            Veja a opinião de quem utiliza os treinos durante o planejamento, a preparação e a prática.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {testimonials.map((item) => (
            <div
              key={item.name}
              className="flex flex-col gap-5 p-8 md:p-9"
              style={{ backgroundColor: '#F7F5F0', border: '1px solid #D8D4CD', borderRadius: '20px' }}
            >
              <StarRow />

              <p className="text-sm md:text-base leading-relaxed" style={{ color: '#4E5358' }}>
                &ldquo;{item.quote}&rdquo;
              </p>

              <div className="mt-auto pt-2 flex items-center gap-3">
                <div
                  className="relative w-11 h-11 rounded-full flex-shrink-0 overflow-hidden"
                  style={{ border: '2px solid #F0642D' }}
                >
                  <Image
                    src={item.photo || "/placeholder.svg"}
                    alt={item.name}
                    fill
                    className="object-cover"
                    style={{ objectPosition: item.objectPosition }}
                    sizes="44px"
                  />
                </div>
                <div className="flex flex-col text-left">
                  <span className="font-semibold text-sm" style={{ color: '#17191C' }}>
                    {item.name}
                  </span>
                  <span className="text-xs" style={{ color: '#8A8F94' }}>
                    {item.role}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
