import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "underline-offset-4 hover:underline text-primary",
        // New CTA variant
        cta: "bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold shadow-lg hover:from-green-700 hover:to-emerald-600 transition-colors",
        // New Glass variant
        glass: "bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-soft hover:bg-white/20 hover:shadow-medium transition-smooth",
        hero: "bg-gradient-to-r from-emerald-500 to-green-600 text-white font-bold shadow-strong hover:shadow-glow hover:scale-105 hover:from-emerald-600 hover:to-green-700 transition-bounce",
        // hero: "bg-gradient-primary text-white hover:shadow-glow hover:scale-105 border border-primary-light/20",
        // cta: "bg-primary text-primary-foreground hover:bg-primary-dark shadow-medium hover:shadow-glow hover:scale-105 font-semibold",
        // glass: "bg-white/10 backdrop-blur-sm border border-white/20 text-white hover:bg-white/20 shadow-medium",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 px-3 rounded-md",
        lg: "h-11 px-8 rounded-md",
        icon: "h-10 w-10",
        // New XL size
        xl: "h-14 px-10 rounded-lg text-lg font-semibold"
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
