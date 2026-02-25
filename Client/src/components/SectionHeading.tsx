import { motion } from "framer-motion";
import type { ReactNode } from "react";

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  children?: ReactNode;
}

const SectionHeading = ({
  label,
  title,
  description,
  align = "center",
  children,
}: SectionHeadingProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6 }}
      className={`mb-12 md:mb-16 ${align === "center" ? "text-center" : "text-left"}`}
    >
      {label && (
        <span className="mb-3 inline-block font-body text-xs font-semibold uppercase tracking-[0.2em] text-accent">
          {label}
        </span>
      )}
      <h2 className="font-display text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl">
        {title}
      </h2>
      <div className={`gold-divider mt-4 ${align === "left" ? "!mx-0" : ""}`} />
      {description && (
        <p className="mx-auto mt-6 max-w-2xl font-body text-base leading-relaxed text-muted-foreground md:text-lg">
          {description}
        </p>
      )}
      {children}
    </motion.div>
  );
};

export default SectionHeading;
