import { resolve } from "node:path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const host = process.env.TAURI_DEV_HOST;

const hmr = {
	host,
	port: 1421,
	protocol: "ws",
};

export default defineConfig(async () => ({
	server: {
		hmr: host ? hmr : undefined,
		port: 1420,
		host: host || false,
		watch: {
			ignored: ["**/src-tauri/**"],
		},
		strictPort: true,
	},

	plugins: [
		react({
			babel: {
				plugins: ["babel-plugin-react-compiler"],
			},
		}),

		tailwindcss(),
	],

	resolve: {
		alias: {
			"@": resolve(import.meta.dirname, "./src"),
			"~": resolve(import.meta.dirname, "./"),
		},
	},

	clearScreen: false,
}));
