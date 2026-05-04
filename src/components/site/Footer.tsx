export function Footer() {
  return (
    <footer className="border-t border-hairline">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="flex items-center gap-2">
            <div className="relative h-6 w-6">
              <div className="absolute inset-0 rounded-md bg-gradient-accent opacity-90" />
              <div className="absolute inset-[3px] rounded-[5px] bg-background flex items-center justify-center">
                <div className="h-1.5 w-1.5 rounded-full bg-glow" />
              </div>
            </div>
            <span className="font-display font-semibold tracking-tight text-sm">
              ISMIND<span className="text-glow">.AI</span>
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-x-8 gap-y-3 text-xs text-muted-foreground">
            <a href="/#concepto" className="hover:text-foreground transition-colors">Concepto</a>
            <a href="/#solucion" className="hover:text-foreground transition-colors">Sistema</a>
            <a href="/#servicios" className="hover:text-foreground transition-colors">Producto</a>
            <a href="/#casos" className="hover:text-foreground transition-colors">Casos</a>
            <a href="/privacidad" className="hover:text-foreground transition-colors">Privacidad</a>
            <a href="/cookies" className="hover:text-foreground transition-colors">Cookies</a>
            <a href="mailto:agencia@ismindai.es" className="hover:text-foreground transition-colors">agencia@ismindai.es</a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-hairline flex flex-col md:flex-row items-start md:items-center justify-between gap-3 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} ISMIND.AI · Infraestructura de IA para negocios de servicios.</div>
          <div className="font-mono flex items-center gap-2">
            <span className="h-1.5 w-1.5 rounded-full bg-glow animate-pulse-glow" />
            sistemas operativos
          </div>
        </div>
      </div>
    </footer>
  );
}
