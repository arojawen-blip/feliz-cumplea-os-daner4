// ======================================
// BOTÓN PARA ABRIR LA SORPRESA
// ======================================

const boton = document.getElementById("abrir");

const portada = document.getElementById("portada");

const contenido = document.getElementById("contenido");

const musica = document.getElementById("musica");


// Cuando Daner pulse el botón...

boton.addEventListener("click", function () {

    // Ocultamos la portada
    portada.style.display = "none";

    // Mostramos el contenido
    contenido.classList.remove("oculto");

    // Intentamos reproducir la música
    musica.play().catch(function () {

        console.log(
            "La música debe iniciarse pulsando ▶️."
        );

    });

    // Comenzamos los corazones
    iniciarCorazones();

});



// ======================================
// CORAZONES QUE CAEN
// ======================================

function iniciarCorazones() {

    setInterval(function () {

        crearCorazon();

    }, 300);

}



// ======================================
// CREAR UN CORAZÓN
// ======================================

function crearCorazon() {

    const corazon =
        document.createElement("div");


    // Clase del corazón
    corazon.className = "corazon";


    // Forma del corazón
    corazon.innerHTML = "♥";


    // Posición horizontal aleatoria
    corazon.style.left =
        Math.random() * 100 + "vw";


    // Tamaño aleatorio
    const tamaño =
        Math.random() * 25 + 15;


    corazon.style.fontSize =
        tamaño + "px";


    // Velocidad aleatoria
    const velocidad =
        Math.random() * 4 + 4;


    corazon.style.animationDuration =
        velocidad + "s";


    // Diferentes tonos
    const colores = [

        "#ff69b4",

        "#ff1493",

        "#ff85c8",

        "#e879f9",

        "#f0abfc",

        "#ffb5e8"

    ];


    // Elegimos un color
    const color =
        colores[
            Math.floor(
                Math.random() * colores.length
            )
        ];


    corazon.style.color = color;


    // Ponemos el corazón en la página
    document
        .getElementById("corazones")
        .appendChild(corazon);


    // Lo eliminamos después
    setTimeout(function () {

        corazon.remove();

    }, velocidad * 1000);

}