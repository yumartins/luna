import { auth } from "@/lib";
import Elysia from "elysia";

export default new Elysia({ name: "better-auth" }).mount(auth.handler).macro({
	auth: {
		async resolve({ error, request: { headers } }) {
			const session = await auth.api.getSession({
				headers,
			});

			if (!session) return error(401);

			return {
				user: session.user,
				session: session.session,
			};
		},
	},
});
