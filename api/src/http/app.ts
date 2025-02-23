import { error } from "@/http/middlewares";
import { auth } from "@/http/routes";
import cors from "@elysiajs/cors";
import { swagger } from "@elysiajs/swagger";
import Elysia from "elysia";

const app = new Elysia()
	.use(
		cors({
			origin: "http://localhost:3000",
			methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
			credentials: true,
			allowedHeaders: ["Authorization", "Content-Type"],
		}),
	)
	.use(
		swagger({
			path: "/docs",
			documentation: {
				info: {
					title: "Luna",
					version: "0.0.1",
					description: "API Documentation for Luna",
				},
			},
		}),
	)
	.use(error)
	.use(auth)
	.get("/user", ({ user }) => user, {
		auth: true,
	});

export type App = typeof app;

export { app };
