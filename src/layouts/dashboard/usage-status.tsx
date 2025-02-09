import {
	type ChartConfig,
	ChartContainer,
	ChartTooltip,
	ChartTooltipContent,
} from "@/components/ui";
import { cn } from "@/utils";
import type { ComponentProps } from "react";
import { Bar, BarChart, Rectangle, XAxis } from "recharts";

interface UsageStatusProps extends ComponentProps<"div"> {}

const data = [
	{ registeredAt: "9:00", usage: 10 },
	{ registeredAt: "10:00", usage: 20 },
	{ registeredAt: "11:00", usage: 30 },
	{ registeredAt: "12:00", usage: 25 },
	{ registeredAt: "13:00", usage: 28 },
	{ registeredAt: "14:00", usage: 12 },
	{ registeredAt: "15:00", usage: 30 },
	{ registeredAt: "16:00", usage: 28 },
	{ registeredAt: "17:00", usage: 15 },
	{ registeredAt: "18:00", usage: 18 },
	{ registeredAt: "19:00", usage: 13 },
	{ registeredAt: "20:00", usage: 8 },
	{ registeredAt: "21:00", usage: 16 },
	{ registeredAt: "22:00", usage: 24 },
	{ registeredAt: "23:00", usage: 29 },
];

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

const chartConfig = {
	usage: {
		label: "Usage",
	},
} satisfies ChartConfig;

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

			<ChartContainer config={chartConfig} className="w-full h-56">
				<BarChart accessibilityLayer data={data}>
					<Bar
						fill="var(--color-zinc-800)"
						radius={6}
						dataKey="usage"
						activeBar={({ ...props }) => {
							return <Rectangle {...props} fill="url(#colorUv)" />;
						}}
						activeIndex={2}
					/>

					<ChartTooltip
						cursor={false}
						content={<ChartTooltipContent hideLabel />}
						formatter={(value) => `${value} Kwh`}
					/>

					<XAxis
						dataKey="registeredAt"
						tickLine={false}
						axisLine={false}
						tickMargin={10}
					/>

					<defs>
						<linearGradient id="colorUv" x1="1" y1="1" x2="0" y2="0">
							<stop offset="30%" stopColor="#a1ffff" />
							<stop offset="95%" stopColor="#edbaff" />
						</linearGradient>
					</defs>
				</BarChart>
			</ChartContainer>
		</div>
	);
}
