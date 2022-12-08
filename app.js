'use strict';

import{Search} from './fetch.js';

//mandar llamar al metodo para imprimir la api de un personaje en consola
const personaje = await  mostrarPersonaje('iron man');
console.log(personaje);

async function  mostrarPersonaje(datos) {
    return await Search(datos)
};

//variables
const buscar = document.getElementById('barrabusqueda');
const btnbuscar = document.getElementById('botonbuscar');  
const btnlimpiar = document.getElementById('botonlimpiar');
const main = document.getElementById('main');
const data = document.getElementById('data');
const img = document.getElementById('heroimgp');
const h3 = document.getElementById('titulo');
const p = document.getElementById('description');
const h4 = document.getElementById('comics');
const h2 = document.getElementById('entre');

const li = document.getElementById('tcomics');
const l1 = document.getElementById('tcomics1');
const l2 = document.getElementById('tcomics2');
const l3 = document.getElementById('tcomics3');
const l4 = document.getElementById('tcomics4');
const l5 = document.getElementById('tcomics5');
const l6 = document.getElementById('tcomics6');
const l7 = document.getElementById('tcomics7');
const l8 = document.getElementById('tcomics8');
const l9 = document.getElementById('tcomics9');

//datos iniciales
img.src = `${personaje.data.results[0].thumbnail.path}.${personaje.data.results[0].thumbnail.extension}`;
img.alt = personaje.data.results[0].name;
img.className = 'img-hero';
h3.textContent = personaje.data.results[0].name;
h3.className = 'main__data_Marvel-title';
p.textContent = personaje.data.results[0].description;

h4.textContent = 'Comics del personaje: ';
li.textContent = personaje.data.results[0].comics.items[0].name;
li.className = 'dick';
l1.textContent = personaje.data.results[0].comics.items[1].name;
l1.className = 'dick';
l2.textContent = personaje.data.results[0].comics.items[2].name;
l2.className = 'dick';
l3.textContent = personaje.data.results[0].comics.items[3].name;
l3.className = 'dick';
l4.textContent = personaje.data.results[0].comics.items[4].name;
l4.className = 'dick';
l5.textContent = personaje.data.results[0].comics.items[5].name;
l5.className = 'dick';
l6.textContent = personaje.data.results[0].comics.items[6].name;
l6.className = 'dick';
l7.textContent = personaje.data.results[0].comics.items[7].name;
l7.className = 'dick';
l8.textContent = personaje.data.results[0].comics.items[8].name;
l8.className = 'dick';
l9.textContent = personaje.data.results[0].comics.items[9].name;
l9.className = 'dick';

//orden para mostrar los elementos
main.append(buscar);
main.append(btnbuscar);
main.append(btnlimpiar);

//boton buscar
async function buscarP(){
    const res = await mostrarPersonaje(buscar.value);
    h2.textContent = 'Resultado de busqueda:';
    img.src = `${res.data.results[0].thumbnail.path}.${res.data.results[0].thumbnail.extension}`;
    img.alt = res.data.results[0].name;
    img.className = 'img-hero';

    h3.textContent = res.data.results[0].name;
    h3.className = 'main__data_Marvel-title';

    p.textContent = res.data.results[0].description;

    h4.textContent = 'Comics del personaje: ';
    li.textContent = res.data.results[0].comics.items[0].name,
    li.className = 'dick';
    l1.textContent = res.data.results[0].comics.items[1].name;
    l1.className = 'dick';
    l2.textContent = res.data.results[0].comics.items[2].name;
    l2.className = 'dick';
    l3.textContent = res.data.results[0].comics.items[3].name;
    l3.className = 'dick';
    l4.textContent = res.data.results[0].comics.items[4].name;
    l4.className = 'dick';
    l5.textContent = res.data.results[0].comics.items[5].name;
    l5.className = 'dick';
    l6.textContent = res.data.results[0].comics.items[6].name;
    l6.className = 'dick';
    l7.textContent = res.data.results[0].comics.items[7].name;
    l7.className = 'dick';
    l8.textContent = res.data.results[0].comics.items[8].name;
    l8.className = 'dick';
    l9.textContent = res.data.results[0].comics.items[9].name;
    l9.className = 'dick';
};

//boton limpiar
async function clear(){
    buscar.value = "";
    document.getElementById('main').innerHTML='';
};

btnbuscar.onclick = buscarP;
btnlimpiar.onclick = clear;