import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./app";

const root = document.getElementById("root") as HTMLElement;

const app = createRoot(root);

app.render(
	<StrictMode>
		<App />
	</StrictMode>,
);
