type Props = {
  isOpen: boolean;
  children?: React.ReactNode;
}

export function ModalRoot({ isOpen, children }: Props) {
  return (
    <>
      {
        isOpen &&
        <div className="h-screen w-full fixed top-0 left-0 flex justify-center items-center bg-black/30 backdrop-blur-xs">
          <div className="bg-white rounded-xl shadow-lg p-4 flex flex-col gap-2">
            {children}
          </div>
        </div>
      }
    </>
  )
}