import { env } from "@/env";
import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { multiSession } from "better-auth/plugins";
import { db } from "./db";

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

	database: prismaAdapter(db, {
		provider: "postgresql",
	}),

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
