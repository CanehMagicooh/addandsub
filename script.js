function Calculate() {
    var Plus = parseInt(document.getElementById("Number1").innerHTML) + parseInt(document.getElementById("Number2").innerHTML)
    var Minor = parseInt(document.getElementById("Number1").innerHTML) - parseInt(document.getElementById("Number2").innerHTML)
    var Multiple = parseInt(document.getElementById("Number1").innerHTML) * parseInt(document.getElementById("Number2").innerHTML)
    document.getElementById("Result").innerHTML = "= " + Plus
}
