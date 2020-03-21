function Result() {
	var a = parseInt(document.getElementById('FirstNumber').value);
	var b = parseInt(document.getElementById('SecondNumber').value);
	var c = parseInt(document.getElementById('ThreeNumber').value);
	var numeroR = b * b - a * 4 * c
    var Radice = Math.pow(numeroR, 0.5);
    var Risultato001 = -b + Radice
    var Risultato01 = 2 * a
    var Risultato1 = Risultato001 / Risultato01
    var Risultato002 = -b - Radice
    var Risultato02 = 2 * a
    var Risultato2 = Risultato002 / Risultato02

	document.getElementById("Result1").innerHTML = "X1: " + Risultato1
	document.getElementById("Result2").innerHTML = "X2: " + Risultato2
}
