import { env } from "@/env";
import { app } from "@/http/app";

app.listen(
	{
		port: env.PORT,
	},
	() =>
		console.log(
			`🦊 Luna is running at ${app.server?.hostname}:${app.server?.port}`,
		),
);
