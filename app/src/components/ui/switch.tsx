import { cn } from "@/utils";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import type { ComponentPropsWithRef } from "react";

export function Switch({
	className,
	...props
}: ComponentPropsWithRef<typeof SwitchPrimitives.Root>) {
	return (
		<SwitchPrimitives.Root
			{...props}
			className={cn(
				"peer inline-flex h-5 w-9 shrink-0 cursor-pointer items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-950 focus-visible:ring-offset-2 focus-visible:ring-offset-white disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-linear-to-bl/srgb from-purple-300 to-cyan-300 data-[state=unchecked]:bg-zinc-700",
				className,
			)}
		>
			<SwitchPrimitives.Thumb
				className={cn(
					"pointer-events-none block size-3 rounded-full bg-zinc-400 shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-5 data-[state=checked]:bg-zinc-900 data-[state=unchecked]:translate-x-1",
				)}
			/>
		</SwitchPrimitives.Root>
	);
}
