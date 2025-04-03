import { FloatingNavigation } from "@/app/components/FloatingNavigation";

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main>
      {children}
      <FloatingNavigation />
    </main>
  )
}