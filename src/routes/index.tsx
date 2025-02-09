import { Button, Switch } from "@/components/ui";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: Dashboard,
});

const devices = [
	{
		key: "living-room",
		name: "Living Room",
	},
	{
		key: "kitchen-room",
		name: "Kitchen Room",
	},
	{
		key: "bedroom",
		name: "Bedroom",
	},
];

function Dashboard() {
	return (
		<div className="flex flex-col">
			<div className="flex items-center justify-between gap-6">
				<div className="flex items-center gap-4">
					{devices.map((device, index) => (
						<Button
							key={device.key}
							variant={index === 0 ? "primary" : "ghost"}
						>
							{device.name}
						</Button>
					))}
				</div>

				<Button>+ Add Device</Button>
			</div>

			<div className="grid grid-cols-5 gap-6 mt-9">
				<div className="flex flex-col col-span-2 rounded-2xl bg-zinc-800 p-6 md:p-8">
					<div className="flex items-center justify-between">
						<h3 className="text-lg font-semibold">Air Conditioner</h3>

						<Switch />
					</div>
				</div>
			</div>
		</div>
	);
}
