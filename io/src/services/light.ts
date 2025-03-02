import Digital from "pins/digital";

interface LightParams {
	mode: 0 | 1;
}

export function light({ mode }: LightParams) {
	// let blink = 1;

	const led = new Digital({ pin: 5, mode: Digital.Output });

	console.log("MODE", mode);

	trace(mode === 0 ? "Ligando o relé..." : "Desligando o relé...");

	led.write(Number(mode));

	// Timer.repeat(() => {
	// 	blink = blink ^ 1;

	// 	led.write(blink);

	// 	trace(`LED toggled => ${blink}\n`);
	// }, 2000);

	return led;
}
