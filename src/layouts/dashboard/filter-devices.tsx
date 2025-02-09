import { Button } from "@/components/ui";

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

export function FilterDevices() {
	return (
		<div className="flex items-center gap-4">
			{devices.map((device, index) => (
				<Button key={device.key} variant={index === 0 ? "primary" : "ghost"}>
					{device.name}
				</Button>
			))}
		</div>
	);
}
