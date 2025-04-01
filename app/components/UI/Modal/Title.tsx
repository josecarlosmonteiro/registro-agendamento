type Props = {
  closeModal?: VoidFunction;
  showCloseBtn?: boolean;
  children?: React.ReactNode;
}

export function Title({
  showCloseBtn = true,
  closeModal = () => false,
  children,
}: Props) {
  return (
    <div className="p-2 bg-indigo-900 w-full rounded-t-lg flex justify-between items-center gap-10">
      <div className="text-white">{children}</div>

      {
        showCloseBtn &&
        <button
          type="button"
          className="p-2 rounded-full text-white"
          onClick={closeModal}
        >
          x
        </button>
      }
    </div>
  )
}