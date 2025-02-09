import "@/styles/main.css";

import { Sidebar } from "@/components";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
	component: App,
});

function App() {
	return (
		<main
			data-theme="dark"
			className="flex w-full min-h-screen bg-zinc-900 text-zinc-100"
		>
			<Sidebar />

			<div>
				<Outlet />
			</div>

			<TanStackRouterDevtools position="bottom-right" />
		</main>
	);
}
