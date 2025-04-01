import { InputHTMLAttributes } from "react";

interface Props extends InputHTMLAttributes<HTMLInputElement> {

}

export function Input({ className, ...rest }: Props) {
  return (
    <input
      {...rest}
      className={`p-2 rounded-lg border-2 border-indigo-500 focus:ring-indigo-500 duration-200 ${className}`}
    />
  )
}