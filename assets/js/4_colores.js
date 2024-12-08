const azul = document.querySelector ('#azul')
const rojo= document.querySelector ('#rojo')
const verde = document.querySelector ('#verde')
const amarillo= document.querySelector ('#amarillo')



const pintarFondo = (div, color) => {
    div.style.backgroundColor = color;
};
azul.addEventListener('click', () => {
    pintarFondo(azul, 'black');
});

rojo.addEventListener('click', () => {
    pintarFondo(rojo, 'black');
});

verde.addEventListener('click', () => {
    pintarFondo(verde, 'black');
});

amarillo.addEventListener('click', () => {
    pintarFondo(amarillo, 'black');
});


const key = document.querySelector ('#key')

document.addEventListener('keydown', function (event) {
    if (event.key === 'a') {
    /* Cambiar a color 1 */
    pintarFondo(key, 'pink');
    } else if (event.key === 's') {
    /* Cambiar a color 2 */
    pintarFondo(key, 'orange');
    } else if (event.key === 'd') {
        /* Cambiar a color 3 */
        pintarFondo(key, 'lightblue');
    }
    })

