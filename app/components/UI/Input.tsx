import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> { };

export function Input({ className, ...rest }: Props) {
  return (
    <input
      {...rest}
      className={`p-2 rounded-lg border border-primary ring-1 ring-primary-light duration-300 ${className}`}
    />
  )
}