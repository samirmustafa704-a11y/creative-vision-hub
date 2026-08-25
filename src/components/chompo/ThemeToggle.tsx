import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/lib/theme";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function ThemeToggle({ className = "" }: { className?: string }) {
  const { theme, toggle } = useTheme();
  const prefersReducedMotion = useReducedMotion();
  const isDark = theme === "dark";

  const duration = prefersReducedMotion ? 0 : 500;

  return (
    <button
      type="button"
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggle}
      className={[
        "group relative inline-flex h-10 w-10 items-center justify-center rounded-full",
        "border-2 border-current transition-colors duration-300 ease-out",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        isDark
          ? "border-cream/20 bg-ink text-cream hover:border-cream/40"
          : "border-ink/10 bg-cream text-ink hover:border-ink/30",
        className,
      ].join(" ")}
    >
      <span className="sr-only">{isDark ? "Light" : "Dark"}</span>

      {/* Sun */}
      <span
        className="absolute inset-0 flex items-center justify-center"
        style={{
          transform: isDark ? "rotate(90deg) scale(0.5)" : "rotate(0deg) scale(1)",
          opacity: isDark ? 0 : 1,
          transition: `transform ${duration}ms cubic-bezier(0.34, 1.56, 0.64, 1), opacity ${duration}ms ease`,
        }}
      >
        <Sun
          size={20}
          strokeWidth={2}
          className="transition-transform duration-500 ease-out group-hover:rotate-45"
        />
      </span>

      {/* Moon */}
      <span
        className="absolute inset-0 flex items-center justify-center"
        style={{
          transform: isDark ? "rotate(0deg) scale(1)" : "rotate(-90deg) scale(0.5)",
          opacity: isDark ? 1 : 0,
          transition: `transform ${duration}ms cubic-bezier(0.34, 1.56, 0.64, 1), opacity ${duration}ms ease`,
        }}
      >
        <Moon
          size={20}
          strokeWidth={2}
          className="transition-transform duration-500 ease-out group-hover:-rotate-12"
        />
      </span>
    </button>
  );
}
