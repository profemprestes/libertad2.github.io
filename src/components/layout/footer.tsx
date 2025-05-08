export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-6 text-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} Club Atlético Libertad. All rights reserved.</p>
        <p className="mt-1">
          Designed with <span className="text-primary">&hearts;</span> by AI & Human collaboration.
        </p>
      </div>
    </footer>
  );
}
