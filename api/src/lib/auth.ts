import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { db } from "./db";
import { env } from "@/env";

export const auth = betterAuth({
  session: {
    cookieCache: {
      maxAge: 5 * 60,
      enabled: true,
    },
  },

  appName: "Luna AI",

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
