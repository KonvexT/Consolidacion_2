$(document).ready(function () {

    function limpiarerrores() {
        $("#nombre-help").html("");
        $("#email-help").html("");
        $("#telefono-help").html("");
        $("#mensaje-help").html("");
        $("#lbl-nombre").removeClass("text-danger")
        $("#lbl-email").removeClass("text-danger")
        $("#lbl-telefono").removeClass("text-danger")
        $("#lbl-mensaje").removeClass("text-danger")
    }

    $("#formulario").submit(function (evento) {
        evento.preventDefault();
        limpiarerrores();
        var nombre = $("#txt-nombre").val();
        var email = $("#txt-email").val();
        var telefono = $("#txt-telefono").val();
        var mensaje = $("#txt-mensaje").val();


        var valido = true
        if (email == "") {
            valido = false
            $("#email-help").html("Ingrese su correo electronico");
            $("#lbl-email").addClass("text-danger")
        }

        if (nombre == "") {
            valido = false
            $("#nombre-help").html("Ingrese su nombre");
            $("#lbl-nombre").addClass("text-danger")
        }

        if (telefono == "") {
            valido = false
            $("#telefono-help").html("Ingrese su telefono");
            $("#lbl-telefono").addClass("text-danger")
        }

        if (mensaje == "") {
            valido = false
            $("#mensaje-help").html("Ingrese el mensaje");
            $("#lbl-mensaje").addClass("text-danger")
        }

        if (valido) {
            $("#alert-send").removeClass("d-none")
        }
    })

    $("#btn-limpiar").click(function () {
        limpiarerrores();
        $("#txt-email").val("")
        $("#txt-nombre").val("")
        $("#txt-telefono").val("")
        $("#txt-mensaje").val("")
        $("#alert-send").addClass("d-none")
    })
});

const temaOscuro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "dark");
    document.querySelector("#d1-icon").setAttribute("class", "bi bi-sun-fill")
}

const temaClaro = () => {
    document.querySelector("body").setAttribute("data-bs-theme", "light");
    document.querySelector("#d1-icon").setAttribute("class", "bi bi-moon-fill")
}

const cambiarTema = () => {
    document.querySelector("body").getAttribute("data-bs-theme") === "light" ?
        temaOscuro() : temaClaro();
}

