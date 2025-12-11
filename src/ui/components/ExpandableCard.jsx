import React, { useState } from 'react';
import { Eye, FlaskConical, GraduationCap, Share2, Cpu, Users } from 'lucide-react';

/**
 * Componente recriado do zero para:
 * - Manter o estilo visual e animações do card expansível.
 * - Corrigir:
 *   - Título vertical (90°) centralizado em cada card no estado inicial.
 *   - Título não cortado (altura correta).
 *   - Ao expandir, título horizontal alinhado centralmente no rodapé do card.
 *
 * Regras de comportamento:
 * - Estado inicial:
 *   - Ícone/descrição ocultos (opacity 0).
 *   - Título rotacionado -90°, centralizado verticalmente no meio do card, bem visível.
 * - Hover (card expandido):
 *   - Card cresce (flex-grow visual).
 *   - Ícone aparece no meio.
 *   - Descrição aparece abaixo do ícone.
 *   - Título vai para o rodapé do card, horizontal, centralizado.
 * - Ao sair do hover:
 *   - Tudo volta exatamente para o estado inicial, SEM drift.
 */

const ICONS = [
  Eye,
  FlaskConical,
  GraduationCap,
  Share2,
  Cpu,
  Users,
];

const ExpandableCard = ({ values }) => {
  // Fallback: if values are not provided, don't break
  const safeValues = Array.isArray(values) && values.length > 0
    ? values
    : [
        { title: 'Nossa Visão', description: '' },
        { title: 'Pesquisa Pioneira', description: '' },
        { title: 'Excelência Educacional', description: '' },
      ];

  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className="flex gap-4 p-8 rounded-2xl border mx-auto shadow-2xl"
      style={{
        backgroundColor: 'var(--bg-secondary)',
        borderColor: 'var(--primary)',
        width: '1100px',
        height: '500px',
      }}
    >
      {safeValues.map((item, index) => {
        const Icon = ICONS[index] || ICONS[0];
        const isActive = hoveredIndex === index;

        return (
          <div
            key={index}
            className="group h-full overflow-hidden cursor-pointer rounded-xl border transition-all duration-500 flex flex-col relative"
            style={{
              backgroundColor: 'var(--bg-secondary)',
              borderColor: 'var(--primary)',
              flex: isActive ? 3 : 1,
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Conteúdo central (ícone + descrição) */}
            <div
              className="flex-1 flex flex-col items-center justify-center px-4 transition-all duration-500"
              style={{
                opacity: isActive ? 1 : 0,
              }}
            >
              {/* Ícone centralizado */}
              <div
                className="mb-4 rounded-xl transition-all duration-500 flex items-center justify-center"
                style={{
                  padding: '16px',
                  backgroundColor: 'var(--primary)' + '20',
                  transform: isActive ? 'scale(1)' : 'scale(0.9)',
                }}
              >
                <Icon
                  className="w-10 h-10"
                  style={{ color: 'var(--primary)' }}
                />
              </div>

              {/* Descrição */}
              <p
                className="text-sm md:text-base leading-relaxed text-center transition-all duration-500"
                style={{
                  color: 'var(--text-secondary)',
                  maxWidth: '260px',
                }}
              >
                {item.description}
              </p>
            </div>

            {/* TÍTULO - CONTROLADO 100% POR POSIÇÃO ABSOLUTA ESTÁVEL */}
            {/* Wrapper absoluto sempre relativo ao card */}
            <div
              className="pointer-events-none transition-all duration-500"
              style={{
                position: 'absolute',
                left: '50%',
                bottom: 0,
                transform: 'translateX(-50%)',
                width: '100%',
                height: '200px', /* Increased height to accommodate rotated text */
                display: 'flex',
                alignItems: 'flex-end',
                justifyContent: 'center',
              }}
            >
              <h3
                className="card-title font-title font-semibold transition-all duration-500 whitespace-nowrap"
                style={{
                  color: 'var(--text-primary)',
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  fontSize: '14px',
                  width: 'auto',
                  textAlign: 'center',
                  transformOrigin: 'center center',

                  // Initial state: vertical, centered in the middle of the card
                  // Expanded state: horizontal at the bottom, centered
                  transform: isActive
                    ? 'rotate(0deg) translateY(-10px)' /* Adjust position when horizontal */
                    : 'rotate(-90deg) translateX(180px)', /* Using X-axis to control vertical position of rotated text */
                }}
              >
                {item.title}
              </h3>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ExpandableCard;