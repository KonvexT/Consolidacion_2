$(document).ready(function () {

    /*PROYECTO 3*/
    do {
        var cantidad = prompt("¿Cuantos colaboradores desea registrar?")

        if (isNaN(cantidad)) {
            alert("Por favor ingresar un valor numérico")
        }
    } while (isNaN(cantidad));

    var colaboradores = []
    var tbody = document.querySelector("#tabla-colaborador tbody")
    for (var index = 0; index < cantidad; index++) {
        var rut = prompt("Ingrese el RUT del colaborador " + index)
        var nombre = prompt("Ingrese el nombre del colaborador " + index)
        var salarioHora = prompt("Ingrese el salario por hora del colaborador " + index)
        var cantidadHora = prompt("Ingrese la cantidad de horas trabajadas del colaborador " + index)
        var salario = salarioHora * cantidadHora

        colaboradores[index] = {
            rutcol: rut,
            nomcol: nombre,
            salcol: salario,
            cantcol: cantidadHora
        }
    }

    var index = 0;
    while (index < cantidad) {
        tbody.innerHTML += `
        <tr>
            <td>${colaboradores[index].rutcol}</td>
            <td>${colaboradores[index].nomcol}</td>
            ${colaboradores[index].salcol > 400000 ?
                `<td class="bg-danger">${colaboradores[index].salcol}</td>` :
                `<td class="bg-success">${colaboradores[index].salcol}</td>`
            }
            <td>${colaboradores[index].cantcol}</td>
        </tr>
    `
        index = index + 1;
    }

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