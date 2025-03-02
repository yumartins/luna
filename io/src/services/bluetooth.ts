import BLEServer from "bleserver";

class BLE extends BLEServer {
	onReady(): void {
		console.log("Starting advertising...");

		this.startAdvertising({
			advertisingData: {
				flags: 6,
				completeName: process.env.BLE_DEVICE_NAME,
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
			`Characteristic ${characteristic.uuid} written with value: ${value}\n`,
		);
	}
}

export const bluetooth = new BLE();
