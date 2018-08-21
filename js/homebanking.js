//Declaración de variables
var nombreUsuario = 'Renata Lima';
var saldoCuenta = 3800;
var limiteExtraccion = 4000;
var saldoAnterior;
var SinValorParaExtraer;
var valorMayorLimExtraer;
var valorExtraer;
var valorBillete100;
var agua = 350;
var luz = 210;
var telefono = 425;
var internet = 570;
var cuentaServicio;
var RealCuentaServicio;
var CuentaAmiga1 = "1234567";
var CuentaAmiga2 = "7654321";
var NumeroCuenta;
var ValorTransferir;
var RealValorTransferir;
var User = 1234; // el numero de usuario para ingresar 
var NUser;

//Ejecución de las funciones que actualizan los valores de las variables en el HTML.
window.onload = function () {
    iniciarSesion()
    cargarNombreEnPantalla();
    actualizarSaldoEnPantalla();
    actualizarLimiteEnPantalla();
}

//Funciones que tenes que completar

function cambiarLimiteDeExtraccion() {
    var CambioValorExtraccion = prompt("Ingrese un valor $ para nuevo Limite de Extraccion: ");
    limiteExtraccion = parseInt(CambioValorExtraccion);
        actualizarLimiteEnPantalla(limiteExtraccion);
        alert("Has cambiado el valor de limite de extraccion para $" + limiteExtraccion);
    }


function extraerDinero() {
    var realValorExtraer = prompt("Ingrese un valor $ ");
    valorExtraer = parseInt(realValorExtraer);
    saldoAnterior = saldoCuenta;
    haySaldoDisponible(valorExtraer);
    if (SinValorParaExtraer) {
        alert("No hay saldo disponible en tu cuenta para extraer esa cantidad de dinero!");
        return;
    } else if (valorMayorLimExtraer) {
        alert("La cantidad de dinero que deseas extraer es mayor a tu límite de extraccion");
        return;
    } else if (valorBillete100) {
        alert("Solo puedes extraer billetes de $100. Gracias!");
        return;
    } else {
        actualizarExtraerSaldo(valorExtraer);
        actualizarSaldoEnPantalla();
        alert("Has retirado $" + valorExtraer + "\nSaldo Anterior $" + saldoAnterior + "\nSaldo Actual $" + saldoCuenta);
        return;
    }
}

function depositarDinero() {
    var realvalorDeposito = prompt("Ingrese un valor $ para deposito: ");
    var valorDeposito = parseInt(realvalorDeposito);
    var saldoAnteriorAlDeposito = saldoCuenta;
    actualizarSaldoCuenta(valorDeposito);
    actualizarSaldoEnPantalla();
    alert("Has depositado $" + valorDeposito + "\nSaldo Anterior $" + saldoAnteriorAlDeposito + "\nSaldo Actual $" + saldoCuenta);
    
}

function pagarServicio() {
    var saldoAnteriorServicio = saldoCuenta;

    cuentaServicio = prompt("Ingrese el numero que corresponda con el servicio que queres pagar:" + "\n1-Agua" + "\n2-Internet" + "\n3-Telefono" + "\n4-Luz");
    switch (cuentaServicio) {
        case "1":
            if (saldoCuenta < agua) {
                alert("Ops! No hay saldo!")
                break;
            } else {
                PagosDeServicio(agua);
                alert("Has pagado el Servicio de Agua" + "\nSaldo anterior $" + saldoAnteriorServicio + "\nDinero descontado $" + agua + "\nSaldo Atual $" + saldoCuenta);
                actualizarSaldoEnPantalla();
                break;
            }
        case "2":
            if (saldoCuenta < internet) {
                alert("Ops! No hay saldo!")
                break;
            } else {
                PagosDeServicio(internet);
                alert("Has pagado el Servicio de Internet" + "\nSaldo anterior $" + saldoAnteriorServicio + "\nDinero descontado $" + internet + "\nSaldo Atual $" + saldoCuenta);
                actualizarSaldoEnPantalla();
                break;
            }
        case "3":
            if (saldoCuenta < telefono) {
                alert("Ops! No hay saldo!")
                break;
            } else {
                PagosDeServicio(telefono);
                alert("Has pagado el Servicio de Telefono" + "\nSaldo anterior $" + saldoAnteriorServicio + "\nDinero descontado $" + telefono + "\nSaldo Atual $" + saldoCuenta);
                actualizarSaldoEnPantalla();
                break;
            }
        case "4":
            if (saldoCuenta < luz) {
                alert("Ops! No hay saldo!")
                break;
            } else {
                PagosDeServicio(luz);
                alert("Has pagado el Servicio de Luz" + "\nSaldo anterior $" + saldoAnteriorServicio + "\nDinero descontado $" + luz + "\nSaldo Atual $" + saldoCuenta);
                actualizarSaldoEnPantalla();
                break;
            }
        default:
            alert("No existe el servicio que se ha seleccionado.");
    }
}

function transferirDinero() {

    ValorTransferir = prompt("Ingrese un valor $ para Tranferir: ");
    RealValorTransferir = parseInt(ValorTransferir);

    if (RealValorTransferir >= saldoCuenta) {
        alert("Ops! No hay saldo suficiente!");
        return;
    }else if (RealValorTransferir <= saldoCuenta) {
        NumeroCuenta = prompt("Por favor, ingrese el numero de su cuenta");
        VerificacionDeCuenta(NumeroCuenta);
        return;
    } 
}

function iniciarSesion() {
    var usuario = prompt("Ingrese el numero de tu cuenta!");
    NUser = parseInt(usuario);
    VerificacionDeCuentaUser(NUser);
}

// Funciones para actualizar la aplicacion

function actualizarSaldoCuenta(monto) {
    saldoCuenta = saldoCuenta + monto;
}

function actualizarExtraerSaldo(monto) {
    saldoCuenta = saldoCuenta - monto;
}

function haySaldoDisponible(valorExtraer) {
    SinValorParaExtraer = valorExtraer > saldoAnterior == true;
    valorMayorLimExtraer = valorExtraer > limiteExtraccion == true;
    valorBillete100 = valorExtraer % 100 != 0;
}

function PagosDeServicio() {

    if (cuentaServicio == "1") {
        saldoCuenta = saldoCuenta - agua
        return;
    } else if (cuentaServicio == "2") {
        saldoCuenta = saldoCuenta - internet
        return;
    } else if (cuentaServicio == "3") {
        saldoCuenta = saldoCuenta - telefono
        return;
    } else if (cuentaServicio == "4") {
        saldoCuenta = saldoCuenta - luz
        return;
    }
}

function VerificacionDeCuenta(cuenta) {
    if (cuenta === CuentaAmiga1) {
        saldoCuenta = saldoCuenta - RealValorTransferir
        alert("Se han transferido $" + RealValorTransferir + "\nCuenta Destino: " + NumeroCuenta);
        actualizarSaldoEnPantalla();
        return;
    } if (cuenta === CuentaAmiga2) {
        saldoCuenta = saldoCuenta - RealValorTransferir
        alert("Se han transferido $" + RealValorTransferir + "\nCuenta Destino: " + NumeroCuenta);
        actualizarSaldoEnPantalla();
        return;
    } if (cuenta != CuentaAmiga1){
        alert("Solo puede transferirse dinero a una cuenta amiga!");
        return; // no anda bien 
    } else if(cuenta != CuentaAmiga2){
        alert("Solo puede transferirse dinero a una cuenta amiga!");
        return;
    }
}

function VerificacionDeCuentaUser(NUser) {
    if (User === NUser) {
        alert("Bienvenido/a " + nombreUsuario + " ya puedes comenzar a realizar operaciones!");
        return;
    } if (User != NUser) {
        saldoCuenta = 0;
        alert("Código Incorrecto! Tu dinero ha sido retenido por cuestiones de seguridad");
        return;
    }
}


//Funciones que actualizan el valor de las variables en el HTML
function cargarNombreEnPantalla() {
    document.getElementById("nombre").innerHTML = "Bienvenido/a " + nombreUsuario;
}

function actualizarSaldoEnPantalla() {
    document.getElementById("saldo-cuenta").innerHTML = "$" + saldoCuenta;
}

function actualizarLimiteEnPantalla() {
    document.getElementById("limite-extraccion").innerHTML = "Tu límite de extracción es: $" + limiteExtraccion;
}
