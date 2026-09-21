type MarqueeBarProps = {
  text: string;
};

const REPEAT_COUNT = 8;

/** Faixa fina no topo com texto passando em loop contínuo — usada para avisos curtos e discretos. */
export function MarqueeBar({ text }: MarqueeBarProps) {
  const items = Array.from({ length: REPEAT_COUNT });

  return (
    <div className="overflow-hidden border-b border-white/10 bg-[#062026] py-1.5">
      <div className="flex w-max animate-marquee">
        {[0, 1].map((group) => (
          <div key={group} className="flex shrink-0" aria-hidden={group === 1}>
            {items.map((_, i) => (
              <span
                key={i}
                className="mx-6 flex items-center gap-2 whitespace-nowrap text-[11px] font-semibold uppercase tracking-wider text-white/75"
              >
                <span className="h-1 w-1 rounded-full bg-[#F58220]" aria-hidden />
                {text}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
