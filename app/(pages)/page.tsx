import Link from "next/link";

export default function Home() {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="text-blue-500 underline">
        <Link href={'/login'}>Login</Link>
      </div>
    </div>
  );
}
