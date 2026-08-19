export function WhatYouGet() {
  const modules = [
    ['🧘', 'Preparação, Mobilidade e Técnica', '25 treinos', 'Aquecimento, mobilidade, coordenação, postura, educativos de corrida e preparação técnica.'],
    ['⚡', 'Velocidade e Aceleração', '25 treinos', 'Saída, reação, aceleração, frequência de passadas, velocidade máxima e sprints.'],
    ['🏃', 'Resistência, Meio-Fundo e Fundo', '20 treinos', 'Treinos contínuos, intervalados e progressivos para desenvolver ritmo e resistência.'],
    ['🚧', 'Corridas com Barreiras', '15 treinos', 'Ataque, recuperação, ritmo, espaçamento, passagem técnica e simulação de prova.'],
    ['🤝', 'Revezamentos', '15 treinos', 'Entrega e recepção do bastão, zonas de passagem, sincronização e velocidade em equipe.'],
    ['📏', 'Salto em Distância', '20 treinos', 'Corrida de aproximação, impulsão, fase aérea, aterrissagem e integração do salto.'],
    ['⬆️', 'Salto em Altura', '15 treinos', 'Aproximação, curva, impulsão, elevação, passagem sobre o sarrafo e aterrissagem.'],
    ['🦘', 'Salto Triplo', '10 treinos', 'Ritmo, equilíbrio e continuidade técnica entre as fases hop, step e jump.'],
    ['⚫', 'Arremesso de Peso', '15 treinos', 'Empunhadura, posicionamento, deslocamento, força, coordenação e finalização.'],
    ['🥏', 'Lançamento de Disco', '12 treinos', 'Empunhadura, balanço, giro, transferência de força e direção do lançamento.'],
    ['🎯', 'Lançamento de Dardo', '13 treinos', 'Empunhadura, transporte, corrida de aproximação, bloqueio e lançamento.'],
    ['🔥', 'Circuitos e Treinos Combinados', '15 treinos', 'Circuitos técnicos e físicos que combinam diferentes habilidades e modalidades.'],
  ];

  return (
    <section className="w-full bg-[#F1EEE8] py-16 md:py-24">
      <div className="mobile-content">
        <div className="mx-auto mb-10 flex max-w-3xl flex-col items-center gap-4 text-center md:mb-12">
          <h2 className="font-grotesk text-3xl leading-tight text-pretty text-[#17191C] sm:text-4xl md:text-5xl">
            <span className="text-[#F0642D]">200 Treinos</span> ORGANIZADOS DO BÁSICO AO AVANÇADO
          </h2>
          <p className="max-w-2xl text-sm leading-relaxed text-[#5E6267] sm:text-base md:text-lg">
            Encontre sessões prontas para velocidade, resistência, técnica, saltos, arremessos, mobilidade e muito mais.
          </p>
        </div>
 botçao 
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {modules.map(([emoji, title, count, description]) => (
            <article
              key={title}
              className="group relative flex min-h-[230px] flex-col rounded-[18px] border bg-white p-5 shadow-[0_8px_24px_rgba(23,25,28,0.06)] transition-all duration-250 hover:-translate-y-1 hover:border-[#F0642D] hover:shadow-[0_14px_30px_rgba(23,25,28,0.12)] sm:p-6"
              style={{ borderColor: '#DED9D1' }}
            >
              <div className="absolute inset-x-5 top-0 h-1 rounded-b-full bg-[#F0642D] opacity-70 transition-opacity duration-250 group-hover:opacity-100 sm:inset-x-6" />
              <div className="flex items-start justify-between gap-3">
                <div className="flex size-11 shrink-0 items-center justify-center rounded-full border text-[21px]" style={{ backgroundColor: '#FFF0E8', borderColor: '#F5C2AC' }}>
                  <span aria-hidden="true">{emoji}</span>
                </div>
                <span className="mt-1 shrink-0 rounded-full border px-3 py-1 text-xs font-bold leading-none whitespace-nowrap" style={{ backgroundColor: '#FFF0E8', color: '#B8422E', borderColor: '#F5C2AC' }}>
                  {count}
                </span>
              </div>
              <div className="mt-5 flex flex-1 flex-col">
                <h3 className="font-grotesk text-lg leading-tight text-pretty text-[#17191C] sm:text-xl">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-[#4E5358]">{description}</p>
              </div>
              <div className="mt-5 h-px w-12 bg-[#B8422E] opacity-40 transition-all duration-250 group-hover:w-20 group-hover:opacity-80" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
