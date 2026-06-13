import {
  Atom,
  BookOpen,
  Crown,
  GitBranch,
  Orbit,
  Shield,
  Sparkles,
  Swords,
} from "lucide-react";

export function isNavActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  const section = href.split("/").slice(0, 2).join("/");
  return pathname === href || pathname.startsWith(`${section}/`);
}

export const navigation = [
  { label: "Home", href: "/", icon: Shield },
  { label: "Cosmology", href: "/cosmology/materium-immaterium", icon: Orbit },
  { label: "Imperium", href: "/imperium/golden-throne", icon: Crown },
  { label: "Primarchs", href: "/primarchs/roboute-guilliman", icon: Swords },
  { label: "Chaos", href: "/chaos/ruinous-powers", icon: Sparkles },
  { label: "Xenos", href: "/xenos/necrons", icon: Atom },
  { label: "Timeline", href: "/timeline", icon: GitBranch },
  { label: "Learning", href: "/learning", icon: BookOpen },
] as const;
