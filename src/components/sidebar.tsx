import {
	IconGrid,
	IconGridFilled,
	IconLayer,
	IconLayerFilled,
	IconUser,
	IconUserFilled,
	IconUsers,
	IconUsersFilled,
} from "@/assets/icons";
import { Link } from "@tanstack/react-router";

const routes = [
	{
		path: "/",
		icon: IconGrid,
		label: "Dashboard",
		activeIcon: IconGridFilled,
	},
	{
		path: "/rooms",
		icon: IconLayer,
		label: "Rooms",
		activeIcon: IconLayerFilled,
	},
	{
		path: "/members",
		icon: IconUsers,
		label: "Members",
		activeIcon: IconUsersFilled,
	},
	{
		path: "/account",
		icon: IconUser,
		label: "Account",
		activeIcon: IconUserFilled,
	},
];

export function Sidebar() {
	return (
		<div className="h-screen w-56 flex flex-col">
			<div className="p-10 pt-16">
				<h1 className="text-white font-bold">Luna</h1>
			</div>

			<nav className="mt-6">
				<ul className="flex flex-col gap-6">
					{routes.map(({ icon: Icon, path, label, activeIcon: ActiveIcon }) => (
						<Link
							to={path}
							key={path}
							className="flex items-center gap-5 text-sm pl-10 pr-5 py-2 relative text-zinc-500"
							activeProps={{
								className:
									"text-zinc-100! font-semibold [&>.icon]:hidden [&>.icon-active]:flex [&>.bar]:scale-100 [&>.bar]:opacity-100",
							}}
							activeOptions={{ exact: true }}
						>
							<Icon className="size-5 icon" />
							<ActiveIcon className="size-5 icon-active hidden" />

							{label}

							<span className="bar rounded-r-full bg-zinc-100 absolute left-0 w-1.5 h-8 transition-all duration-300 scale-0 opacity-0 pointer-events-none" />
						</Link>
					))}
				</ul>
			</nav>
		</div>
	);
}
