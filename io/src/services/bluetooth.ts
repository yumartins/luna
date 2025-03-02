import BLEServer from "bleserver";
import { uuid } from "btutils";
import { light } from "./light";

const BATTERY_SERVICE_UUID = uuid`180F`;
const HEART_RATE_SERVIE_UUID = uuid`180D`;

class BLE extends BLEServer {
	onReady(): void {
		console.log("Starting advertising...");

		this.startAdvertising({
			advertisingData: {
				flags: 6,
				completeName: process.env.BLE_DEVICE_NAME,
				completeUUID16List: [HEART_RATE_SERVIE_UUID, BATTERY_SERVICE_UUID],
			},
		});
	}

	onConnected(device: Parameters<BLEServer["onConnected"]>[0]): void {
		console.log(`📲 Device connected: ${device.address}`);

		this.stopAdvertising();
	}

	onDisconnected(device: Parameters<BLEServer["onDisconnected"]>[0]): void {
		console.log(`🔴 Device disconnected: ${device.address}`);

		this.startAdvertising({
			advertisingData: {
				flags: 6,
				completeName: "Luna IO",
			},
		});
	}

	onCharacteristicRead(
		characteristic: Parameters<BLEServer["onCharacteristicRead"]>[0],
	) {
		trace(`Characteristic ${characteristic.uuid} read\n`);

		return 123;
	}

	onCharacteristicWritten(
		characteristic: Parameters<BLEServer["onCharacteristicWritten"]>[0],
		value: Parameters<BLEServer["onCharacteristicWritten"]>[1],
	) {
		trace(
			`Characteristic ${characteristic.name} written with value: ${value}\n`,
		);

		if (characteristic.name === "light_characteristic") light({ mode: value });
	}
}

export const bluetooth = new BLE();
