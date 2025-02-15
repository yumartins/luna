import "@/styles/main.css";

import { Sidebar, Topbar } from "@/components";
import { Outlet, createRootRoute } from "@tanstack/react-router";
import { TanStackRouterDevtools } from "@tanstack/router-devtools";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				charSet: "utf-8",
			},
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1",
			},
			{
				title: "Luna",
			},
		],
	}),
	component: App,
});

function App() {
	return (
		<main
			data-theme="dark"
			className="flex w-full min-h-screen bg-zinc-900 text-zinc-100"
		>
			<Sidebar />

			<div className="flex-1">
				<Topbar />

				<div className="flex flex-col p-10 overflow-y-auto h-[100vh-6rem]">
					<Outlet />
				</div>
			</div>

			<TanStackRouterDevtools position="bottom-right" />
		</main>
	);
}
