import Client from "mqtt";

export function mqtt() {
	const client = new Client({
		id: "iot",
		host: process.env.MQTT_HOST,
		port: process.env.MQTT_PORT,
		user: process.env.MQTT_USERNAME,
		password: process.env.MQTT_PASSWORD,
	});

	trace("🔄 Connecting to MQTT broker...\n");

	client.onReady = () => {
		trace("✅ Connected to MQTT with authentication!\n");
		client.subscribe("iot/commands");
	};

	client.onMessage = (topic, message) => {
		trace(`📩 Received message: ${topic} - ${message}\n`);
	};
}
