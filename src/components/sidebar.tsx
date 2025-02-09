import { IconGrid } from "@/assets/icons";

export function Sidebar() {
	return (
		<div className="h-screen w-64 flex flex-col">
			<div className="p-10">
				<h1 className="text-white font-bold">Luna</h1>
			</div>

			<nav>
				<ul>
					<li>
						<IconGrid />
						Dashboard
					</li>
				</ul>
			</nav>
		</div>
	);
}
