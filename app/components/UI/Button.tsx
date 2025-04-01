import { ButtonHTMLAttributes } from "react";

type TBtnVariant = "primary";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: TBtnVariant;
}

export function Button({ variant = 'primary', ...rest }: Props) {
  const btnVariant: Record<TBtnVariant, string> = {
    primary: 'bg-indigo-800 text-white',
  }

  return (
    <button
      {...rest}
      className={`
        p-2 px-4 rounded-lg font-medium
        ${btnVariant[variant]}
        ${rest.className}
      `}
    />
  )
}