import { Elysia } from "elysia";
import { swagger } from '@elysiajs/swagger'

const app = new Elysia()
  .use(swagger())
  .get("/", () => "Hello Elysia")
  .listen(3333);

if (!app.server) throw new Error("Server not initialized");

console.log(
	`🦊 Elysia is running at ${app.server.hostname}:${app.server.port}`,
);
