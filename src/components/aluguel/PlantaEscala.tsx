import type { Planta } from "@/data/salas";

/** Área desenhada igual em todos os cards (em metros): assim as plantas são comparáveis entre si. */
const CAMPO = { w: 6.2, h: 4.7 };
const CADEIRA = 0.23;

/** Planta em escala, com cara de desenho técnico. Vetor leve, sem imagem. */
export function PlantaEscala({ planta, titulo }: { planta: Planta; titulo: string }) {
  const { largura, profundidade, mesas } = planta;
  const x0 = (CAMPO.w - largura) / 2 + 0.12;
  const y0 = (CAMPO.h - profundidade) / 2 + 0.14;
  const porta = 0.8;
  const area = (largura * profundidade).toLocaleString("pt-BR", { maximumFractionDigits: 0 });

  return (
    <svg
      viewBox={`0 0 ${CAMPO.w} ${CAMPO.h}`}
      role="img"
      aria-label={`${titulo}: planta de exemplo, em escala, com cerca de ${area} metros quadrados`}
      className="block h-auto w-full"
    >
      <defs>
        <pattern id="malha" width="0.5" height="0.5" patternUnits="userSpaceOnUse">
          <path d="M0.5 0H0V0.5" fill="none" stroke="#2BA7BD" strokeOpacity="0.16" strokeWidth="0.015" />
        </pattern>
      </defs>
      <rect width={CAMPO.w} height={CAMPO.h} fill="url(#malha)" />

      {/* Piso */}
      <rect x={x0} y={y0} width={largura} height={profundidade} fill="#00829A" fillOpacity="0.16" />

      {/* Paredes, com o vão da porta embaixo à direita */}
      <path
        d={`M${x0 + largura - 0.25} ${y0 + profundidade} H${x0 + largura} V${y0} H${x0} V${y0 + profundidade} H${
          x0 + largura - 0.25 - porta
        }`}
        fill="none"
        stroke="#E8F4F6"
        strokeWidth="0.1"
        strokeLinejoin="miter"
      />
      {/* Porta */}
      <path
        d={`M${x0 + largura - 0.25 - porta} ${y0 + profundidade} v${-porta} a${porta} ${porta} 0 0 1 ${porta} ${porta}`}
        fill="none"
        stroke="#7CC4D1"
        strokeWidth="0.025"
        strokeDasharray="0.09 0.06"
      />

      {/* Mesas e cadeiras */}
      {mesas.map((mesa, i) => (
        <g key={i}>
          {mesa.cadeiras.map((c, j) => (
            <circle
              key={j}
              cx={x0 + c.x}
              cy={y0 + c.y}
              r={CADEIRA}
              fill="#0D3B45"
              stroke="#E8F4F6"
              strokeWidth="0.04"
            />
          ))}
          <rect
            x={x0 + mesa.x}
            y={y0 + mesa.y}
            width={mesa.w}
            height={mesa.h}
            rx="0.06"
            fill="#F58220"
          />
        </g>
      ))}

      {/* Cotas */}
      <g stroke="#7CC4D1" strokeWidth="0.02">
        <path d={`M${x0} ${y0 - 0.28} H${x0 + largura} M${x0} ${y0 - 0.37} v0.18 M${x0 + largura} ${y0 - 0.37} v0.18`} />
        <path d={`M${x0 - 0.28} ${y0} V${y0 + profundidade} M${x0 - 0.37} ${y0} h0.18 M${x0 - 0.37} ${y0 + profundidade} h0.18`} />
      </g>
      <g fill="#BFE3EA" fontSize="0.2" fontWeight="600" textAnchor="middle" fontFamily="inherit">
        <text x={x0 + largura / 2} y={y0 - 0.37}>
          {largura.toLocaleString("pt-BR", { minimumFractionDigits: 1 })} m
        </text>
        <text transform={`translate(${x0 - 0.37} ${y0 + profundidade / 2}) rotate(-90)`}>
          {profundidade.toLocaleString("pt-BR", { minimumFractionDigits: 1 })} m
        </text>
      </g>
    </svg>
  );
}
