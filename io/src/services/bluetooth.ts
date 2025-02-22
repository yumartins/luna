import BLEClient from "bleclient";
import { uuid } from "btutils";

const ble = new BLEClient();

const serviceUUID = process.env
	.BLE_SERVICE_UUID as unknown as TemplateStringsArray;
const characteristicUUID = process.env
	.BLE_CHARACTERISTIC_UUID as unknown as TemplateStringsArray;

const SERVICE_UUID = uuid(serviceUUID);
const CHARACTERISTIC_UUID = uuid(characteristicUUID);
