import { Reveal } from "./Reveal";
import { Mail, Phone, Linkedin, Github, ArrowUpRight } from "lucide-react";

const details = [
  {
    icon: Mail,
    label: "m.ssaid356@gmail.com",
    href: "mailto:m.ssaid356@gmail.com",
  },
  { icon: Phone, label: "+20 106 735 8073", href: "tel:+201067358073" },
  {
    icon: Linkedin,
    label: "linkedin.com/in/mostafasamirsaid",
    href: "https://linkedin.com/in/mostafasamirsaid",
  },
  {
    icon: Github,
    label: "github.com/Mostafa-SAID7",
    href: "https://github.com/Mostafa-SAID7",
  },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-32 lg:py-44">
      <div className="glow-radial pointer-events-none absolute inset-0" />
      <div className="relative mx-auto max-w-7xl px-6 text-center lg:px-10">
        <Reveal>
          <p className="eyebrow">Contact</p>
          <h2 className="display mx-auto mt-6 max-w-4xl text-[clamp(2.5rem,6vw,5.5rem)]">
            Looking for an engineer who builds booking systems that scale?
          </h2>

          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:m.ssaid356@gmail.com"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-primary-foreground transition-opacity duration-500 hover:opacity-90"
            >
              Start a conversation
              <ArrowUpRight className="size-4 transition-transform duration-500 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </a>
            <a
              href="https://linkedin.com/in/mostafasamirsaid"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-border px-8 py-4 text-sm transition-all duration-500 hover:border-border-strong hover:bg-secondary"
            >
              View LinkedIn
            </a>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {details.map((d, i) => (
            <Reveal key={d.href} delay={i * 0.06}>
              <a
                href={d.href}
                target={d.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="surface surface-hover flex h-full items-center gap-3 p-6 text-left"
              >
                <d.icon
                  className="size-4 shrink-0 text-muted-foreground"
                  strokeWidth={1.25}
                />
                <span className="truncate text-xs text-muted-foreground">
                  {d.label}
                </span>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
