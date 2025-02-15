import { IconSun1Filled } from "@/assets/icons";
import { cn } from "@/utils";
import type { ComponentProps } from "react";

const data = [
	{
		name: "Light 1",
		brightness: 8,
	},
	{
		name: "Light 2",
		brightness: 11,
	},
	{
		name: "Light 3",
		brightness: 4,
	},
	{
		name: "Light 4",
		brightness: 8,
	},
	{
		name: "Light 5",
		brightness: 10,
	},
];

interface LightProps extends ComponentProps<"div"> {}

export function Light({ className, ...props }: LightProps) {
	return (
		<div {...props} className={cn("flex flex-col gap-6", className)}>
			<h3 className="text-lg font-semibold">Light</h3>

			<div className="flex flex-col gap-8">
				{data.map(({ name, brightness }) => {
					const percentage = (brightness * 100) / 13;

					return (
						<div key={name} className="flex items-center gap-4">
							<span className="p-2.5 rounded-xl bg-zinc-800 text-zinc-200">
								<IconSun1Filled />
							</span>

							<div className="flex flex-col gap-3">
								<div className="flex items-center justify-between">
									<h4 className="text-sm font-semibold text-zinc-400">
										{name}
									</h4>

									<p className="text-xs font-semibold text-zinc-200">
										{percentage.toFixed(0)}%
									</p>
								</div>

								<div className="flex items-center gap-2.5">
									{Array.from({ length: 13 }).map((_, index) => (
										<span
											key={Math.random()}
											className={cn(
												"size-1.5 rounded-full",
												index + 1 < brightness ? "bg-zinc-200" : "bg-zinc-600",
											)}
										/>
									))}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}
