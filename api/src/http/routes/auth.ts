import { auth } from "@/lib";
import Elysia from "elysia";

export default new Elysia().all("/auth/*", async ({ error, request }) => {
	const BETTER_AUTH_ACCEPT_METHODS = ["POST", "GET"];

	if (BETTER_AUTH_ACCEPT_METHODS.includes(request.method)) {
		return auth.handler(request);
	}

	error(405);
});
