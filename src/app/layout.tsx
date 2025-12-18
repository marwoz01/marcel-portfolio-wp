import "./globals.css";

export const metadata = {
  title: "Marcel Woźniak — Web Developer",
  description: "Portfolio — Next.js / React / Tailwind",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pl">
      <body className="bg-black text-zinc-100 antialiased">
        <div className="pointer-events-none fixed inset-0 noise opacity-30" />
        <div className="pointer-events-none fixed inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(255,255,255,0.10),transparent_35%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.06),transparent_40%),radial-gradient(circle_at_50%_100%,rgba(255,255,255,0.06),transparent_45%)]" />
        {children}
      </body>
    </html>
  );
}
