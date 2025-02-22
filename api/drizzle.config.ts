import { env } from "@/env";
import { defineConfig } from "drizzle-kit";

export default defineConfig({
	out: "./drizzle",
	schema: "./src/lib/db/schemas/index.ts",
	casing: "snake_case",
	dialect: "postgresql",
	migrations: {
		prefix: "timestamp",
	},
	dbCredentials: {
		url: env.DATABASE_URL,
	},
});
