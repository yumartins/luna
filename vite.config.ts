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
	],

	clearScreen: false,
}));
