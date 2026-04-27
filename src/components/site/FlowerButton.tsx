import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { forwardRef } from "react";

type Variant = "primary" | "ghost" | "secondary" | "anchor" | "link";
type Size = "md" | "lg";

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: Variant;
  size?: Size;
  asChild?: boolean;
  arrow?: boolean;
  href?: string;
}

const base =
  "inline-flex items-center justify-center gap-2 font-medium transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed select-none whitespace-nowrap";

const variants: Record<Variant, string> = {
  primary:
    "bg-primary text-primary-foreground hover:bg-primary-hover rounded-full px-7 py-3.5 text-[15px] shadow-soft",
  secondary:
    "bg-leaf text-secondary-foreground hover:bg-leaf-light rounded-full px-7 py-3.5 text-[15px] shadow-soft",
  ghost:
    "bg-transparent text-cream-50 ring-1 ring-cream-50/70 hover:bg-cream-50 hover:text-anchor rounded-full px-7 py-3.5 text-[15px] backdrop-blur-sm",
  anchor:
    "bg-anchor text-anchor-foreground hover:bg-anchor-hover rounded-full px-7 py-3.5 text-[15px]",
  link: "text-primary hover:text-primary-hover underline-offset-4 hover:underline px-0 py-0 text-[15px] font-semibold",
};

const sizes: Record<Size, string> = {
  md: "",
  lg: "px-9 py-4 text-base",
};

export const FlowerButton = forwardRef<HTMLButtonElement, Props>(
  ({ variant = "primary", size = "md", arrow, className, children, href, ...rest }, ref) => {
    const classes = cn(base, variants[variant], sizes[size], className);
    if (href) {
      return (
        <a href={href} className={classes}>
          {children}
          {arrow && <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />}
        </a>
      );
    }
    return (
      <button ref={ref} className={classes} {...rest}>
        {children}
        {arrow && <ArrowRight className="h-4 w-4" aria-hidden />}
      </button>
    );
  }
);
FlowerButton.displayName = "FlowerButton";
