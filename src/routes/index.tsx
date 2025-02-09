import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
	component: Dashboard,
});

function Dashboard() {
	return <h2 className="text-white">Welcome to Luna</h2>;
}
