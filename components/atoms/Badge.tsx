import { cn } from "@/lib/utils";

type BadgeVariant = "availability" | "date" | "skill";

interface BadgeProps {
  variant?: BadgeVariant;
  children: React.ReactNode;
  className?: string;
}

const variantStyles: Record<BadgeVariant, string> = {
  availability:
    "inline-flex items-center gap-1.5 rounded-full bg-base-200 border border-base-300/40 text-base-content text-xs font-medium px-2.5 py-1",
  date: "inline-flex items-center rounded-full bg-base-200 border border-base-300/30 text-base-content text-xs font-mono px-2 py-0.5",
  skill:
    "inline-flex items-center rounded-full bg-base-200 border border-base-300/40 text-base-content text-xs font-medium px-3 py-1",
};

const Badge = ({ variant = "skill", children, className }: BadgeProps) => {
  return (
    <span className={cn(variantStyles[variant], className)}>{children}</span>
  );
};

export default Badge;
