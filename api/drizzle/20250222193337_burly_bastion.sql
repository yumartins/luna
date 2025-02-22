CREATE TABLE "account" (
	"id" text PRIMARY KEY NOT NULL,
	"user_id" text NOT NULL,
	"account_id" text NOT NULL,
	"provider_id" text NOT NULL,
	"access_token" text,
	"refresh_token" text,
	"access_token_expires_at" date,
	"refresh_token_expires_at" date,
	"scope" text,
	"id_token" text,
	"password" text,
	"created_at" date DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" date DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE "session" (
	"id" text PRIMARY KEY NOT NULL,
	"token" text NOT NULL,
	"user_id" text NOT NULL,
	"expires_at" date NOT NULL,
	"ip_address" text,
	"user_agent" text,
	"created_at" date DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" date DEFAULT CURRENT_TIMESTAMP NOT NULL
);
--> statement-breakpoint
CREATE TABLE "user" (
	"id" text PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"image" text,
	"created_at" date DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" date DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"email_verified" boolean DEFAULT false NOT NULL
);
--> statement-breakpoint
CREATE TABLE "verification" (
	"id" text PRIMARY KEY NOT NULL,
	"value" text NOT NULL,
	"expires_at" date NOT NULL,
	"created_at" date DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"updated_at" date DEFAULT CURRENT_TIMESTAMP NOT NULL,
	"identifier" text NOT NULL
);
--> statement-breakpoint
ALTER TABLE "account" ADD CONSTRAINT "account_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;--> statement-breakpoint
ALTER TABLE "session" ADD CONSTRAINT "session_user_id_user_id_fk" FOREIGN KEY ("user_id") REFERENCES "public"."user"("id") ON DELETE no action ON UPDATE no action;