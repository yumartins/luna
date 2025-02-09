import { Button } from "@/components/ui";
import {
	AirConditioner,
	FilterDevices,
	UsageStatus,
} from "@/layouts/dashboard";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: Dashboard,
});

function Dashboard() {
	return (
		<div className="flex flex-col">
			<div className="flex items-center justify-between gap-6">
				<FilterDevices />

				<Button>+ Add Device</Button>
			</div>

			<div className="grid grid-cols-5 gap-6 mt-9">
				<AirConditioner className="col-span-2" />

				<UsageStatus className="col-span-3" />
			</div>
		</div>
	);
}
