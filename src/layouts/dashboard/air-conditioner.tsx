import {
	IconDropFilled,
	IconFlashFilled,
	IconMoonFilled,
	IconSunFilled,
	IconWindFilled,
} from "@/assets/icons";
import { Button, Slider, Switch } from "@/components/ui";
import { cn } from "@/utils";
import { type ComponentProps, useState } from "react";

interface AirConditionerProps extends ComponentProps<"div"> {}

const actions = [
	{
		key: "cold",
		icon: IconSunFilled,
	},
	{
		key: "power",
		icon: IconFlashFilled,
	},
	{
		key: "wind",
		icon: IconWindFilled,
	},
	{
		key: "humidity",
		icon: IconDropFilled,
	},
	{
		key: "night",
		icon: IconMoonFilled,
	},
];

export function AirConditioner({ className, ...props }: AirConditionerProps) {
	const [states, setStates] = useState<string[]>(["cold"]);

	function handleAction(key: string) {
		if (states.includes(key)) {
			setStates((prev) => prev.filter((state) => state !== key));

			return;
		}

		setStates((prev) => [...prev, key]);
	}

	return (
		<div
			{...props}
			className={cn(
				"flex flex-col items-center rounded-2xl bg-zinc-800 p-6 md:p-8",
				className,
			)}
		>
			<div className="flex items-center w-full justify-between">
				<h3 className="text-lg font-semibold">Air Conditioner</h3>

				<Switch />
			</div>

			<h5 className="mt-8 text-4xl font-semibold text-center bg-linear-to-bl/srgb from-purple-300 to-cyan-300 inline-block text-transparent bg-clip-text">
				24℃
			</h5>

			<p className="text-zinc-400 text-sm text-center mt-2">Temperture</p>

			<Slider min={16} max={32} className="mt-6" />

			<div className="flex justify-between w-full mt-3">
				<p className="text-zinc-400 text-xs font-medium">16℃</p>

				{Array.from({ length: 7 }).map((_) => (
					<div
						key={Math.random()}
						className="w-px bg-zinc-500 rounded-full even:h-1.5 odd:h-2.5"
					/>
				))}

				<p className="text-zinc-400 text-xs font-medium">32℃</p>
			</div>

			<div className="flex items-center gap-5 mt-10">
				{actions.map(({ key, icon: Icon }) => (
					<Button
						key={key}
						variant={states.includes(key) ? "primary" : "ghost"}
						onClick={() => handleAction(key)}
						className="px-2 w-10 bg-zinc-700 hover:bg-zinc-700!"
					>
						<Icon className="size-5!" />
					</Button>
				))}
			</div>
		</div>
	);
}
