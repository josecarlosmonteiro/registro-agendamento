type Props = {
  children?: React.ReactNode;
}

export function ModalContent({ children }: Props) {
  return (
    <div className="mt-2">
      {children}
    </div>
  )
}