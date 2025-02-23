import BLEServer from "bleserver";
import { uuid } from "btutils";

const serviceUUID = process.env
	.BLE_SERVICE_UUID as unknown as TemplateStringsArray;
const characteristicUUID = process.env
	.BLE_CHARACTERISTIC_UUID as unknown as TemplateStringsArray;

const SERVICE_UUID = uuid(serviceUUID);
const CHARACTERISTIC_UUID = uuid(characteristicUUID);

class BLE extends BLEServer {
	onReady(): void {
		console.log("Starting advertising...");

		this.startAdvertising({
			advertisingData: {
				flags: 6,
				shortName: "luna",
				completeName: "Luna IO",
				completeUUID16List: [SERVICE_UUID, CHARACTERISTIC_UUID],
			},
		});
	}

	onConnected(device: Parameters<BLEServer["onConnected"]>[0]): void {
		console.log(`📲 Device connected: ${device.address}`);

		this.stopAdvertising();
	}

	onDisconnected(device: Parameters<BLEServer["onDisconnected"]>[0]): void {
		console.log(`🔴 Device disconnected: ${device.address}`);
	}
}

export const bluetooth = new BLE();
