import { bluetooth, wifi } from "@/services";

function main() {
	wifi();

	bluetooth.onReady();
}

main();
