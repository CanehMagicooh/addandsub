function Calculate() {
    var Number1 = parseInt(document.getElementById("Number1").innerHTML)
    var Number2 = parseInt(document.getElementById("Number2").innerHTML)
    var Plus = Number1 + Number2
    document.getElementById("Result").innerHTML = "= " + Plus
}
