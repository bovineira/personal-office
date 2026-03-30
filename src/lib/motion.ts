import type { Variants } from "framer-motion";

/** Transição padrão para efeitos premium (suave e responsivo). */
export const softSpring = { type: "spring" as const, stiffness: 80, damping: 20 };

/** Fade + subida ao entrar na viewport. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: softSpring,
  },
};

/** Container com stagger nos filhos (headline → parágrafos → botões). */
export const staggerContainer: Variants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.05 },
  },
};

/** Item filho para uso com staggerContainer. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: softSpring,
  },
};
