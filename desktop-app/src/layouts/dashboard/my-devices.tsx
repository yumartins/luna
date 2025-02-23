import {
	IconAirdropFilled,
	IconElectricityFilled,
	IconKeyboardFilled,
	IconMonitorFilled,
	IconSpeakerFilled,
} from "@/assets/icons";
import { Switch } from "@/components/ui";
import { cn } from "@/utils";
import type { ComponentProps } from "react";

interface MyDevicesProps extends ComponentProps<"div"> {}

const devices = [
	{
		icon: IconMonitorFilled,
		name: "Smart TV",
		usage: 5,
		message: "Active for 3 hours",
	},
	{
		icon: IconSpeakerFilled,
		name: "Speaker",
		usage: 5,
		message: "Active for 3 hours",
	},
	{
		icon: IconKeyboardFilled,
		name: "Router",
		usage: 5,
		message: "Active for 3 hours",
	},
	{
		icon: IconAirdropFilled,
		name: "Wifi",
		usage: 5,
		message: "Active for 3 hours",
	},
	{
		icon: IconKeyboardFilled,
		name: "Heater",
		usage: 5,
		message: "Active for 3 hours",
	},
	{
		icon: IconElectricityFilled,
		name: "Socket",
		usage: 5,
		message: "Active for 3 hours",
	},
];

export function MyDevices({ className, ...props }: MyDevicesProps) {
	return (
		<div {...props} className={cn("flex flex-col gap-6", className)}>
			<h3 className="text-lg font-semibold">My Devices</h3>

			<div className="grid grid-cols-2 xl:grid-cols-3">
				{devices.map(({ icon: Icon, name, usage, message }) => (
					<div
						key={name}
						className="flex flex-col gap-2 p-8 rounded-xl group transition-all duration-300 hover:bg-zinc-800"
					>
						<div className="flex justify-between gap-4">
							<span className="p-2.5 rounded-xl bg-zinc-800 text-zinc-200 transition-all duration-300 group-hover:bg-zinc-700">
								<Icon />
							</span>

							<Switch />
						</div>

						<div className="flex items-end gap-4 justify-between">
							<div className="flex flex-col gap-2">
								<h4 className="font-semibold">{name}</h4>

								<p className="text-xs text-zinc-400">{message}</p>
							</div>

							<div className="flex flex-col gap-2">
								<span className="w-4 rounded-full h-0.5 bg-zinc-200" />

								<p className="text-sm font-semibold bg-linear-to-bl/srgb from-purple-300 to-cyan-300 inline-block text-transparent bg-clip-text">
									{usage}Kwh
								</p>
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
}
