function Calculate() {
    var Prova = 11
    var Number1 = parseInt(document.getElementById("Number1").value)
    var Number2 = parseInt(document.getElementById("Number2").value)
    var Oper = document.getElementById("Operator").value
    var Plus = Number1 + Number2
    if (Prova > 10) {
    document.getElementById("Result").innerHTML = Plus
    } else {
   document.getElementById("Result").innerHTML = "Sas"
    }
}
