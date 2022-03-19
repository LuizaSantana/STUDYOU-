
/*----------------------------------------------------------- Exponencial -----------------------------------------------------------*/
function calc() {
    var base = parseInt(document.getElementById("n1").value)
    var altura = parseInt(document.getElementById("n2").value)
    var resultado = Math.pow(base, altura)

    document.getElementById("resposta").innerHTML = "O resultado da potência é = " + resultado
}
function limparTexto1() {

    document.getElementById("n1").value = null ;
    document.getElementById("n2").value = null ;
}



/*----------------------------------------------------------- Normal -----------------------------------------------------------*/
function soma() {
    var x = parseInt(document.getElementById("n3").value )
    var y = parseInt(document.getElementById("n4").value )

    document.getElementById("resultado").innerHTML = "O resultado é = " + (x + y);
}

function sub() {
    var x = parseInt(document.getElementById("n3").value)
    var y = parseInt(document.getElementById("n4").value)


    document.getElementById("resultado").innerHTML = "O resultado é = " + (x - y);
}

function div() {
    var x = parseInt(document.getElementById("n3").value)
    var y = parseInt(document.getElementById("n4").value)


    document.getElementById("resultado").innerHTML = "O resultado é = " + (x / y);
}

function mult() {
    var x = parseInt(document.getElementById("n3").value)
    var y = parseInt(document.getElementById("n4").value)


    document.getElementById("resultado").innerHTML = "O resultado é = " + (x * y);
}

function limparCalc() {
    document.getElementById("resultado").innerHTML = "O resultado é =";
}

function limparTexto() {

    document.getElementById("n3").value = null ;
    document.getElementById("n4").value = null ;
}

/* ----------------------------------------------------------- RAIZ -----------------------------------------------------------*/
function calcR() {
    var x = parseInt(document.getElementById("n5").value)
    var raiz = Math.sqrt(x)

    document.getElementById("resp").innerHTML = "O resultado da raiz quadrada é = " + raiz
}
function limparTexto3() {

    document.getElementById("n5").value = null ;
}

/* ----------------------------------------------------------- Média Aritmetica ----------------------------------------------------------- */
function calcM() {
    var x = parseInt(document.getElementById("n9").value)
    var y = parseInt(document.getElementById("n10").value)
    var z = parseInt(document.getElementById("n11").value)
    var resultado = (x + y + z) / 3

    document.getElementById("respM").innerHTML = "O resultado das médias é = " + resultado
}
function limparTexto4() {

    document.getElementById("n9").value = null ;
    document.getElementById("n10").value = null ;
    document.getElementById("n11").value = null ;
}

/* ----------------------------------------------------------- Conversor -----------------------------------------------------------*/
function calcCF() {
    var celcius = parseInt(document.getElementById("celcius").value)
    var fahrenheit = (celcius * 9/5) + 32

    document.getElementById("respT").innerHTML = "O resultado é = " + fahrenheit
}

function calcFC() {
    var fahrenheit = parseInt(document.getElementById("fahrenheit").value)
    var celcius = (fahrenheit - 32) * 5/9

    document.getElementById("respT").innerHTML = "O resultado é = " + celcius
}
function limparTexto5() {

    document.getElementById("respT").value = null ;
    document.getElementById("celcius").value = null ;
    document.getElementById("fahrenheit").value = null ;
}

/* ----------------------------------------------------------- Retângulo -----------------------------------------------------------*/
function calcR() {
    var base = parseInt(document.getElementById("n7").value)
    var altura = parseInt(document.getElementById("n8").value)
    var resp = base * altura

    document.getElementById("respR").innerHTML = `O resultado é = ${resp}`
}
function limparTexto6() {

    document.getElementById("n7").value = null ;
    document.getElementById("n8").value = null ;
}

/* -----------------------------------------------------------  -----------------------------------------------------------*/
