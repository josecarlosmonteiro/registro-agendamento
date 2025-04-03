import { ButtonHTMLAttributes } from "react";

type TVariant = "primary";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TVariant;
}

export function Button({ variant = 'primary', className, ...rest }: Props) {
  const variantStyles: Record<TVariant, string> = {
    primary: 'bg-primary text-white hover:bg-primary-light'
  }

  return (
    <button
      {...rest}
      className={`p-2 px-4 rounded-lg duration-200 ${variantStyles[variant]} ${className}`}
    />
  )
}