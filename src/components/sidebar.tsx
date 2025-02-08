import { IconGrid } from "@/assets/icons";

export function Sidebar() {
	return (
		<div className="h-screen w-64 flex flex-col">
			<h1 className="text-white">Luna</h1>

			<nav>
				<li>
					<IconGrid />
					Dashboard
				</li>
			</nav>
		</div>
	);
}
