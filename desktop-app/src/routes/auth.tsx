import { IconGithub, IconGoogle } from "@/assets/icons";
import { auth } from "@/lib";
import { Link, createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/auth")({
	component: Auth,
});

function Auth() {
	async function handleAuth(provider: "github" | "google") {
		const { data, error } = await auth.signIn.social({
			provider,
			callbackURL: "/",
		});

		if (error) {
			console.error({ error });
		}

		console.log({ data });
	}

	return (
		<main className="flex min-h-screen flex-col items-center p-24">
			<div className="flex flex-col">
				<h1 className="text-2xl mt-12 mb-6 font-medium">
					Hey friend! Welcome back
				</h1>

				<p className="text-zinc-400">
					Enter your email and we'll send a sign in code.
				</p>

				<input type="email" placeholder="Email" />

				<div className="flex flex-col items-center w-full">
					<p className="text-zinc-600">Or</p>

					<button
						type="button"
						onClick={() => handleAuth("github")}
						className="w-full"
					>
						<IconGithub className="size-5" />
						Continue with Github
					</button>

					<button
						type="button"
						onClick={() => handleAuth("google")}
						className="w-full"
					>
						<IconGoogle className="size-5" />
						Continue with Google
					</button>

					<p className="text-gray-800 my-12">
						No account?
						<Link to="/auth" className="ml-1 font-medium">
							Create one
						</Link>
					</p>

					<p className="text-gray-800 text-sm">
						By continuing, you agree to our
						<span className="ml-0.5 font-medium">Terms and Privacy Policy</span>
						.
					</p>
				</div>
			</div>
		</main>
	);
}
