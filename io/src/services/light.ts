import Digital from "pins/digital";
import Timer from "timer";

export function light() {
	let blink = 1;

	const led = new Digital({ pin: 5, mode: Digital.Output });

	console.log("Ligando o relé...");

	Timer.repeat((id) => {
		blink = blink ^ 1;

		led.write(blink);

		trace(`LED toggled => ${blink}\n`);
	}, 2000);

	return led;
}
