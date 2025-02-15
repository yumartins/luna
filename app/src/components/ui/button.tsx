import { cn } from "@/utils";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";
import type { ComponentPropsWithRef } from "react";

const buttonVariants = cva(
	"inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-xl text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 dark:ring-offset-zinc-950 dark:focus-visible:ring-zinc-300",
	{
		variants: {
			variant: {
				ghost:
					"hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-500 dark:hover:bg-zinc-800 dark:hover:text-zinc-50",
				primary:
					"text-zinc-900 bg-linear-to-bl/srgb from-purple-300 to-cyan-300 font-semibold",
				secondary:
					"bg-zinc-100 text-zinc-900 hover:bg-zinc-100/80 dark:bg-zinc-800 dark:text-zinc-300 dark:hover:bg-zinc-700",
			},
			size: {
				sm: "h-9 px-3",
				md: "h-10 px-3 py-3 md:px-4",
			},
		},
		defaultVariants: {
			size: "md",
			variant: "primary",
		},
	},
);

export interface ButtonProps
	extends ComponentPropsWithRef<"button">,
		VariantProps<typeof buttonVariants> {
	asChild?: boolean;
}

export function Button({
	type = "button",
	size,
	asChild = false,
	variant,
	className,
	...props
}: ButtonProps) {
	const Comp = asChild ? Slot : "button";

	return (
		<Comp
			type={type}
			className={cn(buttonVariants({ variant, size, className }))}
			{...props}
		/>
	);
}
