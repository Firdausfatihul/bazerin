import React from "react";

interface ButtonBasicProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: "gradient" | "slate" | "white" | "teal";
  size?: "sm" | "md" | "lg";
  rounded?: "none" | "sm" | "md" | "lg";
  className?: string;
  ariaLabel?: string;
}

const variantClasses: { [key in NonNullable<ButtonBasicProps["variant"]>]: string } = {
  gradient: `
    bg-gradient-to-r from-emerald-500 to-teal-500
    text-white
    hover:from-emerald-600
    hover:to-teal-600
  `,
  slate: `
    bg-slate-200/90
    text-slate-700
    hover:bg-slate-300
  `,
  white: `
    bg-white/90
    text-emerald-600
    hover:bg-white
  `,
  teal: `
    bg-teal-600/80
    text-white
    hover:bg-teal-700
  `,
}

const roundedClasses: { [key in NonNullable<ButtonBasicProps["rounded"]>]: string } = {
  none: `
    rounded-none
  `,
  sm: `
    rounded-md
  `,
  md: `
    rounded-lg
  `,
  lg: `
    rounded-xl
  `,
}

const sizeClasses: { [key in NonNullable<ButtonBasicProps["size"]>]: string } = {
  sm: `
    px-2
    py-2
  `,
  md: `
    px-6
    py-3
  `,
  lg: `
    px-8
    py-4
  `,
}

const ButtonBasic: React.FC<ButtonBasicProps> = ({
  onClick,
  children,
  variant = "primary",
  className = "",
  size = "md",
  rounded = "md",
  ariaLabel,
}) => {
  const baseClasses = `
    flex
    items-center
    gap-2
    rounded-2xl
    px-6
    py-3
    font-medium
    transition-all
    duration-300
    ease-[cubic-bezier(0.34,1.56,0.64,1)]
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${roundedClasses[rounded]}
    ${className}
  `
  return (
    <button
      onClick={onClick}
      className={baseClasses}
      aria-label={ariaLabel}
    >
      {children}
    </button>
  )
}

export default ButtonBasic;