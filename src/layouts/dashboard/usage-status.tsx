import { cn } from "@/utils";
import type { ComponentProps } from "react";

interface UsageStatusProps extends ComponentProps<"div"> {}

const metrics = [
	{
		label: "Total spend",
		value: "35.02 Kwh",
	},
	{
		label: "Total hours",
		value: "32h",
	},
];

export function UsageStatus({ className, ...props }: UsageStatusProps) {
	return (
		<div {...props} className={cn("flex flex-col", className)}>
			<h3 className="text-lg font-semibold">Usage Status</h3>

			<div className="flex gap-14 mt-6">
				{metrics.map(({ label, value }) => (
					<div key={label} className="flex flex-col gap-2">
						<span className="text-xs text-zinc-400">{label}</span>

						<p className="text-lg font-semibold">{value}</p>
					</div>
				))}
			</div>
		</div>
	);
}
