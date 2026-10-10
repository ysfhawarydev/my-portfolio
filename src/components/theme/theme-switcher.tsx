"use client";

import { useTheme } from "next-themes";
import { Monitor, Moon, Sun } from "lucide-react";

const options = [
  { value: "system", label: "System", Icon: Monitor },
  { value: "light", label: "Light", Icon: Sun },
  { value: "dark", label: "Dark", Icon: Moon },
] as const;

export function ThemeSwitcher() {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <div
      className="inline-flex items-center gap-1 rounded-xl border border-border bg-surface p-1"
      role="group"
      aria-label="Color theme"
    >
      {options.map(({ value, label, Icon }) => (
        <button
          key={value}
          type="button"
          onClick={() => setTheme(value)}
          aria-label={`${label} theme`}
          aria-pressed={
            value === "system" ? undefined : resolvedTheme === value
          }
          title={label}
          className="inline-flex h-8 w-9 items-center justify-center rounded-lg text-muted transition-colors hover:bg-muted-surface focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          <Icon size={17} aria-hidden="true" />
        </button>
      ))}
    </div>
  );
}
