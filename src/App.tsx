import "@/styles/main.css";
import { Sidebar } from "./components";

export default function App() {
	return (
		<main data-theme="dark" className="flex w-full min-h-screen bg-zinc-900">
			<Sidebar />

			<h2 className="text-white">Welcome to Tauri + React</h2>
		</main>
	);
}
