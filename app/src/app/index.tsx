import { auth } from "@/lib";
import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Page() {
	const { replace } = useRouter();

	async function handleLogin() {
		const { data, error } = await auth.signIn.email({
			email: "test@test.com",
			password: "Test123!",
			callbackURL: "/dashboard",
		});

		console.log({ error });

		if (data?.redirect) {
			replace(data.url as string);
		}
	}

	return (
		<View>
			<Text>Top-level page</Text>
			<Button title="Login with Email/Password" onPress={handleLogin} />
		</View>
	);
}
