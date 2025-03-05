import { env } from "@/env";
import MQTT from "mqtt";

export const mqtt = MQTT.connect(env.MQTT_URL, {
	username: env.MQTT_USERNAME,
	password: env.MQTT_PASSWORD,
});
