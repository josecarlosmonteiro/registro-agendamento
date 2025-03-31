type Props = {
  submitFunction: (formData: FormData) => void;
}

export function LoginForm({ submitFunction }: Props) {
  return (
    <form action={submitFunction} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
        <label htmlFor="email" className="text-xs text-gray-600 font-semibold italic">E-mail:</label>
        <input className="border rounded-lg p-1 duration-200" type="email" name="email" required />
      </div>

      <div className="flex flex-col gap-1">
        <label htmlFor="password" className="text-xs text-gray-600 font-semibold italic">Senha:</label>
        <input className="border rounded-lg p-1 duration-200" type="password" name="password" required />
      </div>

      <button
        className="p-2 rounded-lg bg-violet-800 text-white duration-200"
        type="submit"
      >
        acessar
      </button>
    </form>
  )
}