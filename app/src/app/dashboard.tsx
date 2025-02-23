import { auth } from "@/lib";
import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

export default function Page() {
	const { replace } = useRouter();

	const { data: session } = auth.useSession();

	async function handleLogout() {
		await auth.signOut();

		replace("/");
	}

	if (!session) return null;

	return (
		<View>
			<Text>Hello {session.user.name}</Text>
			<Button title="Logout" onPress={handleLogout} />
		</View>
	);
}
