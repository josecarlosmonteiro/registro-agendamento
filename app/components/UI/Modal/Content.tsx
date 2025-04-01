type Props = {
  children?: React.ReactNode;
}

export function Content({ children }: Props) {
  return (
    <div className="p-4 w-full rounded-b-lg bg-white/5">
      {children}
    </div>
  )
}