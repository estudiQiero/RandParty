// Definim variables
// let nouAlumne = "";
let i;
let ol = document.getElementById('llistaAlumnes');
let items = ol.getElementsByTagName('li');

// Any actual per la base a la firma
let any = new Date();
fecha = any.getFullYear();
document.getElementById('data').innerHTML = fecha;

// Dragable <li>

// Funcio AFEGIR alumne a la etiqueta <li>
function afegir() {
    let nouAlumne = "";
    nouAlumne = document.querySelector('#nomAlumne').value;

    nouAlumne.substr(0, 1).toUpperCase() + nouAlumne.substr(1, nouAlumne.length).toLowerCase(); // Letra inicial majuscula NO FUNCIONA

    let newList = document.createElement('li');
    newList.appendChild(document.createTextNode(nouAlumne));

    ol.appendChild(newList);

    document.querySelector('#nomAlumne').value = "";
}

// Funcio ELIMINAR alumne de la etiqueta <li>
function esborrar() {
    elimAlumne = document.querySelector('#nomAlumne').value;
    let items = ol.getElementsByTagName('li');
    let trovat = false;

    for (i = 0; i < items.length; i++) {
        if (elimAlumne == items[i].textContent) {
            trovat = true;
            ol.removeChild(items[i]);
            document.querySelector('#nomAlumne').value = ""; // Esborra text residu al camp.
        }
    }

    if (!trovat) {
        document.querySelector('#caixaInfo').style.visibility = "visible";
        document.querySelector('#nomAlumne').value = "";
    }
}

function random() {
    let ol = document.getElementById('llistaAlumnes');
    let items = ol.getElementsByTagName('li');

    for (i = 0; i < items.length; i++) {
        ol.appendChild(ol.children[Math.random() * i | 0]);
    }
}

function tancarCaixa() {
    document.querySelector('#caixaInfo').style.visibility = "collapse";
}