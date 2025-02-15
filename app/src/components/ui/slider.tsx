import { cn } from "@/utils";
import * as SliderPrimitive from "@radix-ui/react-slider";
import type { ComponentPropsWithRef } from "react";

export function Slider({
	className,
	...props
}: ComponentPropsWithRef<typeof SliderPrimitive.Root>) {
	return (
		<SliderPrimitive.Root
			{...props}
			className={cn(
				"relative flex w-full touch-none select-none items-center",
				className,
			)}
		>
			<SliderPrimitive.Track className="relative h-1.5 w-full grow overflow-hidden rounded-full bg-zinc-100 dark:bg-zinc-700">
				<SliderPrimitive.Range className="absolute h-full bg-linear-to-bl/srgb from-purple-300 to-cyan-300" />
			</SliderPrimitive.Track>
			<SliderPrimitive.Thumb className="block size-3 rounded-full cursor-grab bg-linear-to-bl/srgb from-purple-300 to-cyan-300 ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50" />
		</SliderPrimitive.Root>
	);
}
