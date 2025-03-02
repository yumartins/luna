import { useBLE } from "@/hooks";
import { auth } from "@/lib";
import { useRouter } from "expo-router";
import { Button, View } from "react-native";

export default function Page() {
	const { replace } = useRouter();

	const {
		devices,
		connectToDevice,
		connectedDevice,
		requestPermissions,
		scanForPeripherals,
		...rest
	} = useBLE();

	async function handleLogout() {
		await auth.signOut();

		replace("/");
	}

	console.log({ connectedDevice });

	return (
		<View>
			<Button title="Request Permissions" onPress={requestPermissions} />
			<Button title="Scan for Peripherals" onPress={scanForPeripherals} />
			<Button title="Logout" onPress={handleLogout} />

			<View>
				{devices.map((device) => (
					<Button
						key={device.id}
						title={device.localName ?? ""}
						onPress={() => connectToDevice(device)}
					/>
				))}
			</View>
		</View>
	);
}
