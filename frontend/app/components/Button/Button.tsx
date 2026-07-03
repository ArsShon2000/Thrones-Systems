import type { ButtonHTMLAttributes } from "react";
import styles from "./Button.module.scss";

type ButtonVariant = "red" | "white" | "black";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonVariant;
}

export function Button({ theme = "red", children, className, ...props }: ButtonProps) {
  return (
    <button
      className={[styles.button, styles[theme], className].filter(Boolean).join(" ")}
      {...props}
    >
      {children}
    </button>
  );
}
