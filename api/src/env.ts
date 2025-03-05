import { z } from "zod";

const envSchema = z.object({
	PORT: z.coerce.number().default(3333),
	NODE_ENV: z
		.enum(["test", "production", "development"])
		.default("development"),

	AUTH_RESEND_KEY: z.string(),
	AUTH_RESEND_EMAIL: z.string().email(),

	AUTH_GITHUB_ID: z.string(),
	AUTH_GITHUB_SECRET: z.string(),

	AUTH_GOOGLE_ID: z.string(),
	AUTH_GOOGLE_SECRET: z.string(),

	MQTT_URL: z.string().url(),
	MQTT_USERNAME: z.string(),
	MQTT_PASSWORD: z.string(),

	DATABASE_URL: z.string().url(),

	BETTER_AUTH_SECRET: z.string(),
});

const _env = envSchema.safeParse(Bun.env);

if (_env.success === false) {
	console.error("❌ Invalid environment variables", _env.error.format());

	throw new Error("Invalid environment variables.");
}

export const env = _env.data;
