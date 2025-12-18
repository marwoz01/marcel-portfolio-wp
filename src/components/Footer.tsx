import { Container } from "@/components/Container";

export function Footer() {
  return (
    <footer className="border-t border-white/10 py-10">
      <Container>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between text-xs text-white/50">
          <p>© {new Date().getFullYear()} Marcel Woźniak</p>
        </div>
      </Container>
    </footer>
  );
}
