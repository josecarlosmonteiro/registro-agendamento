type Props = {
  isOpen: boolean;
  children?: React.ReactNode;
}

export function Root({ isOpen, children }: Props) {
  return (
    <>
      {
        isOpen &&
        <div className="fixed top-0 left-0 h-screen w-full flex justify-center items-center bg-black/30 backdrop-blur-sm">
          <div className="max-auto max-w-[90%] overflow-auto">
            {children}
          </div>
        </div>
      }
    </>
  )
}