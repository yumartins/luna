import { ble } from "@/lib";
import * as ExpoDevice from "expo-device";
import { useState } from "react";
import { PermissionsAndroid, Platform } from "react-native";
import type { Characteristic, Device } from "react-native-ble-plx";

export function useBLE() {
	const [devices, setDevices] = useState<Device[]>([]);
	const [connectedDevice, setConnectedDevice] = useState<Device | null>(null);

	async function requestAndroid31Permissions() {
		const bluetoothScanPermission = await PermissionsAndroid.request(
			PermissionsAndroid.PERMISSIONS.BLUETOOTH_SCAN,
			{
				title: "Bluetooth Permission",
				message: "Bluetooth Low Energy requires Location",
				buttonPositive: "OK",
			},
		);
		const bluetoothConnectPermission = await PermissionsAndroid.request(
			PermissionsAndroid.PERMISSIONS.BLUETOOTH_CONNECT,
			{
				title: "Bluetooth Permission",
				message: "Bluetooth Low Energy requires Location",
				buttonPositive: "OK",
			},
		);
		const fineLocationPermission = await PermissionsAndroid.request(
			PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
			{
				title: "Location Permission",
				message: "Bluetooth Low Energy requires Location",
				buttonPositive: "OK",
			},
		);

		return (
			bluetoothScanPermission === "granted" &&
			bluetoothConnectPermission === "granted" &&
			fineLocationPermission === "granted"
		);
	}

	async function requestPermissions() {
		if (Platform.OS === "android") {
			if ((ExpoDevice.platformApiLevel ?? -1) < 31) {
				const granted = await PermissionsAndroid.request(
					PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
					{
						title: "Bluetooth Permission",
						message: "Bluetooth Low Energy requires Location",
						buttonPositive: "OK",
					},
				);

				return granted === PermissionsAndroid.RESULTS.GRANTED;
			}

			const isAndroid31PermissionsGranted = await requestAndroid31Permissions();

			return isAndroid31PermissionsGranted;
		}

		return true;
	}

	function isDuplicteDevice(devices: Device[], nextDevice: Device) {
		return devices.findIndex((device) => nextDevice.id === device.id) > -1;
	}

	async function scanForPeripherals() {
		await ble.startDeviceScan(null, null, async (error, device) => {
			if (error) console.log(error);

			if (device && device.localName === "Luna IO") {
				setDevices((prev: Device[]) => {
					if (!isDuplicteDevice(prev, device)) return [...prev, device];

					return prev;
				});
			}
		});
	}

	async function stopScanForPeripherals() {
		await ble.stopDeviceScan();
	}

	async function startStreamingData(device: Device) {
		if (!device) return;

		function onDataUpdate(
			error: Error | null,
			characteristic: Characteristic | null,
		) {
			if (error) {
				console.log("ERROR", error);
				return;
			}

			console.log("DATA", characteristic?.value);
		}

		device.monitorCharacteristicForService(
			process.env.EXPO_PUBLIC_BLE_SERVICE_UUID as string,
			process.env.EXPO_PUBLIC_BLE_CHARACTERISTIC_UUID as string,
			onDataUpdate,
		);
	}

	async function connectToDevice(device: Device) {
		try {
			const deviceConnection = await ble.connectToDevice(device.id);

			setConnectedDevice(deviceConnection);

			await deviceConnection.discoverAllServicesAndCharacteristics();

			const services = await deviceConnection.services();

			console.log({ services });

			await stopScanForPeripherals();

			startStreamingData(deviceConnection);
		} catch (e) {
			console.log("FAILED TO CONNECT", e);
		}
	}

	async function disconnectFromDevice(deviceId: string) {
		return ble
			.cancelDeviceConnection(deviceId)
			.then(() => setConnectedDevice(null))
			.catch((e) => console.log("FAILED TO DISCONNECT", e));
	}

	return {
		devices,
		connectedDevice,
		connectToDevice,
		scanForPeripherals,
		requestPermissions,
		disconnectFromDevice,
		stopScanForPeripherals,
	};
}
