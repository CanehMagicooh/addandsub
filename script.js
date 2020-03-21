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
