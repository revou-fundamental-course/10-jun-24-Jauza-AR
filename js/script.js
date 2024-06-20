let isCelcius = true;

function konvert(){
	if (isCelcius){
		hasilKonversi.value = +input.value * (9 / 5) + 32;
		idFormula.value = `${input.value}°C * (9 / 5) + 32 = ${hasilKonversi.value}°F`;
	} else {
		hasilKonversi.value = (+input.value - 32) * (5/9)
		idFormula.value = `(${input.value}°F - 32) * (5 / 9) = ${hasilKonversi.value}°C`;
	}
}

function reset(){
	input.value = "";
	hasilKonversi.value = "";
	idFormula.value = "";
}

function reverse() {	
	if (isCelcius){
		c.textContent = "Fahrenheit (°F)";
		f.textContent = "Celcius (°C)";
	} else {
		c.textContent = "Celcius (°C)";
		f.textContent = "Fahrenheit (°F)";
	}
	isCelcius = !isCelcius;
	reset();
}

