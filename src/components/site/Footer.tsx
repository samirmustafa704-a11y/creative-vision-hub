import { Linkedin, Github, Mail } from "lucide-react";

const links = [
  { label: "Work", href: "#work" },
  { label: "Expertise", href: "#expertise" },
  { label: "Experience", href: "#experience" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="hairline">
      <div className="mx-auto flex max-w-7xl flex-col gap-8 px-6 py-14 lg:flex-row lg:items-center lg:justify-between lg:px-10">
        <div>
          <p className="display text-lg">Mostafa Samir</p>
          <p className="mt-1 text-xs tracking-[0.2em] text-muted-foreground uppercase">
            Booking Systems Full Stack Engineer
          </p>
        </div>

        <nav className="flex flex-wrap gap-6">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-xs text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <a
            href="https://linkedin.com/in/mostafasamirsaid"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Linkedin className="size-4" strokeWidth={1.25} />
          </a>
          <a
            href="https://github.com/Mostafa-SAID7"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Github className="size-4" strokeWidth={1.25} />
          </a>
          <a
            href="mailto:m.ssaid356@gmail.com"
            aria-label="Email"
            className="text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="size-4" strokeWidth={1.25} />
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-7xl px-6 pb-10 lg:px-10">
        <p className="text-[11px] text-muted-foreground">
          © {new Date().getFullYear()} Mostafa Samir. Tanta, Egypt.
        </p>
      </div>
    </footer>
  );
}
