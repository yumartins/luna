import { Button } from "@/components/ui";
import {
	AirConditioner,
	FilterDevices,
	MyDevices,
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

			<div className="grid gap-6 mt-9 lg:grid-cols-5">
				<AirConditioner className="lg:col-span-2" />

				<UsageStatus className="lg:col-span-3" />
			</div>

			<div className="grid gap-6 mt-8 lg:grid-cols-5">
				<MyDevices className="lg:col-span-3" />
			</div>
		</div>
	);
}
