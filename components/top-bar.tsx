'use client';

import { useEffect, useState } from 'react';

export function TopBar() {
  const [formattedDate, setFormattedDate] = useState<string>('');

  useEffect(() => {
    const today = new Date();
    const day = String(today.getDate()).padStart(2, '0');
    const months = [
      'JANEIRO', 'FEVEREIRO', 'MARÇO', 'ABRIL', 'MAIO', 'JUNHO',
      'JULHO', 'AGOSTO', 'SETEMBRO', 'OUTUBRO', 'NOVEMBRO', 'DEZEMBRO'
    ];
    const month = months[today.getMonth()];
    setFormattedDate(`${day} DE ${month}`);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 z-50 animate-in fade-in duration-500"
      style={{ backgroundColor: '#FFFFFF', borderBottom: '1px solid #E2E5E1' }}
    >
      <div className="py-2.5 sm:py-3">
        <div
          className="w-full max-w-6xl mx-auto text-center text-xs sm:text-sm md:text-base font-semibold tracking-wide"
          style={{ paddingInline: '12px', boxSizing: 'border-box', color: '#003F2D' }}
        >
          🎁 OFERTA ESPECIAL SOMENTE HOJE{formattedDate ? ` • ${formattedDate}` : ''}
        </div>
      </div>
    </div>
  );
}
