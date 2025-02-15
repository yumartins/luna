import { UnauthorizedError } from "@/http/errors";
import { auth } from "@/lib";
import type { Context } from "elysia";

export async function authenticated(context: Context) {
	const session = await auth.api.getSession({
		headers: context.request.headers,
	});

	if (!session) throw new UnauthorizedError();

	return session;
}
