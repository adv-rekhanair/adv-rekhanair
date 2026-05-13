import { cn } from "@/lib/utils";

export type ButtonVariant = "primary" | "secondary" | "dark";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-amber-700 text-white shadow-sm hover:bg-amber-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-amber-700",
  secondary:
    "border border-gray-300 text-gray-700 shadow-sm hover:border-amber-700 hover:text-amber-700",
  dark: "bg-gray-900 text-white hover:bg-gray-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-gray-900 focus-visible:ring-offset-2",
};

export function buttonVariants(variant: ButtonVariant = "primary", className?: string): string {
  return cn(
    "cursor-pointer rounded-md px-6 py-3 text-sm font-semibold transition-colors disabled:cursor-not-allowed disabled:opacity-60",
    variantClasses[variant],
    className,
  );
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
}

export function Button({ variant = "primary", className, ...props }: ButtonProps) {
  return <button className={buttonVariants(variant, className)} {...props} />;
}
