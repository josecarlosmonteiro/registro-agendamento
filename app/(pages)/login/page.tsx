import { LoginForm } from "@/app/components/login/LoginForm";
import { submitLogin } from "./actions";

export default function LoginPage() {
  return (
    <main className="h-screen flex justify-center items-center">
      <div className="p-4 rounded-lg shadow bg-black/20">
        <h1 className="text-lg font-semibold text-indigo-800">Acesse sua conta</h1>
        <hr /><br />

        <LoginForm submitFunction={submitLogin} />
      </div>
    </main>
  )
}