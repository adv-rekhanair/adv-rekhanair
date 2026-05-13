import { cn } from "@/lib/utils";

export type CardVariant = "default" | "white" | "hover" | "amber";

const variantClasses: Record<CardVariant, string> = {
  default: "rounded-xl border border-gray-200 bg-gray-50",
  white: "rounded-xl border border-gray-200 bg-white",
  hover: "rounded-xl border border-gray-200 bg-white shadow-sm transition-shadow hover:shadow-md",
  amber: "rounded-xl border border-amber-100 bg-amber-50",
};

export function cardVariants(variant: CardVariant = "default", className?: string): string {
  return cn("p-6", variantClasses[variant], className);
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
}

export function Card({ variant = "default", className, ...props }: CardProps) {
  return <div className={cardVariants(variant, className)} {...props} />;
}
