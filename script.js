function Calculate() {
    var Number1 = parseInt(document.getElementById("Number1").value)
    var Number2 = parseInt(document.getElementById("Number2").value)
    var Oper = document.getElementById("Operator").value
    var Add = "+"
    var Sott = "-"
    var Mult = "x"
    var Div = ":"
    var Plus = Number1 + Number2
    var Minor = Number1 - Number2
    var Multiple = Number1 * Number2
    var Division = Number1 / Number2
    if (Oper === Add) {
    document.getElementById("Result").innerHTML = Number1 + " + " + Number2 + " = " + Plus
    }
    if (Oper === Sott) {
    	document.getElementById("Result").innerHTML = Number1 + " - " + Number2 +  " = " + Minor
    }
    if (Oper === Mult) {
    	document.getElementById("Result").innerHTML = Number1 + " x " + Number2 +  " = " + Multiple
    }
    if (Oper === Div) {
    	document.getElementById("Result").innerHTML = Number1 + " : " + Number2 +  " = " + Division
    }
}


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
