// biome-ignore lint/style/useNodejsImportProtocol: it uses the buffer package
import { Buffer } from "buffer";
import type { Base64 } from "react-native-ble-plx";

export function decodeCharacteristicValueToString(value: Base64) {
	return Buffer.from(value, "base64").toString();
}

export function decodeCharacteristicValueToDecimal(value: Base64) {
	return Number.parseInt(Buffer.from(value, "base64").toString("hex"), 10);
}

export function encodeStringToBase64(value: string) {
	return Buffer.from(value).toString("base64");
}
