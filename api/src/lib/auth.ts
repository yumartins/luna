import { env } from "@/env";
import { betterAuth } from "better-auth";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { multiSession } from "better-auth/plugins";
import { db } from "./db";
import { account, session, user, verification } from "./db/schemas";

export const auth = betterAuth({
	plugins: [multiSession({ maximumSessions: 3 })],

	session: {
		cookieCache: {
			maxAge: 5 * 60,
			enabled: true,
		},
	},

	appName: "Luna AI",

	basePath: "/auth",

	database: drizzleAdapter(db, {
		schema: {
			user,
			session,
			account,
			verification,
		},

		provider: "pg",
	}),

	trustedOrigins: ["luna-ai://"],

	emailAndPassword: {
		enabled: true,
	},

	socialProviders: {
		github: {
			clientId: env.AUTH_GITHUB_ID,
			clientSecret: env.AUTH_GITHUB_SECRET,
		},
		google: {
			clientId: env.AUTH_GOOGLE_ID,
			clientSecret: env.AUTH_GOOGLE_SECRET,
		},
	},
});
