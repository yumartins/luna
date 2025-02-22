import Net from "net";
import Wifi, { type WiFiCallback } from "wifi";

export function wifi() {
	function callback(event: Parameters<WiFiCallback>[0]) {
		console.log(event);

		switch (event) {
			case Wifi.connected:
				break;
			case Wifi.disconnected:
				trace("Disconnected\n");
				break;
			case Wifi.gotIP:
				trace(`IP address ${Net.get("IP")}\n`);
				break;
		}
	}

	const monitor = new Wifi(
		{
			ssid: process.env.WIFI_SSID,
			password: process.env.WIFI_PASSWORD,
		},
		callback,
	);

	return monitor;
}
