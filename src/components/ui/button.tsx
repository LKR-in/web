import { cva } from "class-variance-authority"

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "border-2 border-transparent bg-[linear-gradient(#000,#000),linear-gradient(90deg,#ff0000,#ff7f00,#ffff00,#00ff00,#00ffff,#0000ff,#8b00ff,#ff0000)] bg-origin-border bg-clip-padding text-white bg-[length:100%_100%,200%_100%] animate-[rainbow_4s_linear_infinite] hover:scale-105",

        outline:
          "border-border bg-background hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",

        secondary:
          "bg-secondary text-secondary-foreground hover:bg-[color-mix(in_oklch,var(--secondary),var(--foreground)_5%)]",

        ghost:
          "hover:bg-muted hover:text-foreground dark:hover:bg-muted/50",

        destructive:
          "bg-destructive/10 text-destructive hover:bg-destructive/20",

        link: "text-primary underline-offset-4 hover:underline",
      },

      size: {
        default:
          "h-8 gap-1.5 px-4",

        xs:
          "h-6 gap-1 px-2 text-xs",

        sm:
          "h-7 gap-1 px-3 text-[0.8rem]",

        lg:
          "h-10 gap-2 px-6",

        icon: "size-8",
        "icon-xs": "size-6",
        "icon-sm": "size-7",
        "icon-lg": "size-10",
      },
    },

    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export { buttonVariants }
