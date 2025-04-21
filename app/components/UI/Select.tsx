import { SelectHTMLAttributes } from "react";

interface Props extends SelectHTMLAttributes<HTMLSelectElement> { };

export function Select({ className, ...rest }: Props) {
  return (
    <select
      {...rest}
      className={`p-2 rounded-lg border border-primary ring-1 ring-primary-light duration-300 ${className}`}
    />
  )
}