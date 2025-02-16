import {
	IconLifebuoyFilled,
	IconLogout,
	IconNotificationFilled,
} from "@/assets/icons";
import { Button } from "@/components/ui";
import { Link } from "@tanstack/react-router";

export function Topbar() {
	return (
		<div className="w-full pt-10 pb-6 px-10 gap-6 flex items-center justify-between">
			<h2 className="text-xl font-semibold">Dashboard</h2>

			<div className="flex items-center gap-3">
				<Button size="md" variant="secondary" className="px-2 w-10">
					<IconLifebuoyFilled className="size-5!" />
				</Button>

				<Button size="md" variant="secondary" className="px-2 w-10">
					<IconNotificationFilled className="size-5!" />
				</Button>

				<Link to="/auth">
					<Button size="md" variant="secondary" className="px-2 w-10">
						<IconLogout className="size-5!" />
					</Button>
				</Link>
			</div>
		</div>
	);
}
