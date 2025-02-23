import { RouterProvider, createRouter } from "@tanstack/react-router";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { routeTree } from "./routes.gen";

const router = createRouter({
	routeTree,
	defaultPreload: "intent",
	defaultStaleTime: 5000,
	scrollRestoration: true,
});

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

const root = document.getElementById("root") as HTMLElement;

if (!root.innerHTML) {
	const app = createRoot(root);

	app.render(
		<StrictMode>
			<RouterProvider router={router} />
		</StrictMode>,
	);
}
