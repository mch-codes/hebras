export default function Footer() {
  return (
    <footer className="mx-auto flex max-w-7xl flex-col items-center gap-4 border-t border-taupe/30 px-6 py-12 text-[0.7rem] uppercase tracking-[0.25em] text-ink/45 sm:flex-row sm:justify-between md:px-12">
      <span className="font-serif text-base normal-case tracking-normal text-ink">
        Hebras
      </span>
      <a
        href="https://instagram.com/hebrastejidos"
        target="_blank"
        rel="noreferrer noopener"
        className="transition-colors hover:text-clay"
      >
        @hebrastejidos
      </a>
      <span>© {new Date().getFullYear()}</span>
    </footer>
  );
}
