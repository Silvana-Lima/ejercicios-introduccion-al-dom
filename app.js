// saludo✅
// Hacer un programa que al iniciarse pida mediante un prompt ingresar un nombre, y una vez ingresado muestre un saludo con el nombre dentro de un h1. El h1 debe estar centrado y tener un tamaño de letra y una tipografía distinta de la que viene por defecto.

 //let $ = (selector)=> document.querySelector(selector);

// let h1 = $('h1');

// let nombre = prompt('Ingrese su nombre');

// h1.innerText = `Hola ${nombre}`;
// h1.classList.add('titulo');

// color✅
// Hacer un programa que al iniciarse pida mediante un prompt ingresar un color en sistema hexadecimal, y una vez ingresado ponga el color de fondo del body con dicho color.

// let color = prompt('Ingrese un color hexadecimal');

// let body = $('body');

// document.body.style.backgroundColor = color;


// rgb
// Hacer un programa que al iniciarse pida mediante tres prompts ingresar los valores correspondientes a un color en sistema rgb, y una vez ingresado ponga el color de fondo del body con dicho color. Los valores van del 0 al 255 y corresponden a rojo, verde y azul.

// let color1 = prompt('Ingrese un número del 0 al 255');
// let color2 = prompt('Ingrese otro número del 0 al 255');
// let color3 = prompt('Ingrese otro número del 0 al 255');

// document.body.style.backgroundColor = `rgb(${color1}, ${color2}, ${color3})`;


// imagen✅
// Hacer un programa que al iniciarse pregunte mediante un prompt por un tamaño de imagen (siendo las opciones posibles chica, mediana y grande) y dependiendo de la opción elegida modifique el tamaño de una imagen (cualquiera) en el documento html. Por ejemplo:

// Opción elegida	Ancho de imagen
// chica	200px
// mediana	500px
// grande	800px

// let $ = (selector)=> document.querySelector(selector);

// let tamanioDeImagen = prompt('Ingrese tamaño de imagen, opciones disponibles: chica, mediana o grande');
// let imagen = $('img');

// function tamanioElegido(tamanioImagen){
//     if (tamanioImagen === 'chica'){
//        imagen.style.width = "200px";
// } else if (tamanioImagen === 'mediana'){
//     imagen.style.width = "500px"
// } else if (tamanioImagen === 'grande'){
//     imagen.style.width = "800px"
// } else{
//     alert(`Esa no es una opción válida`)
// }
// }

// tamanioElegido(tamanioDeImagen);



// temperatura✅
// Hacer un programa que al iniciarse pregunte mediante un prompt por un temperatura, y con ese dato modifique un h1 en el html, de forma tal que diga, por ejemplo, Temperatura actual: 20°. Cambiar el color del h1 dependiendo de la temperatura ingresada, siguiendo las siguientes reglas:

// Temperatura	Color
// Menor a 0°	Azul
// Mayor o igual a 0° y menor a 15°	Celeste
// Mayor o igual a 15° y menor a 25°	Verde
// Mayor o igual a 25° y menor a 30°	Amarillo
// Mayor o igual a 30° y menor a 35°	Naranja
// Mayor a 35°	Rojo

// let temperatura = prompt('Cuántos grados hace?');
// let h1 = $('h1');

// let temperaturaActual = (grados)=>{
// if (grados < 0){
//     h1.style.color = 'blue';
//     h1.innerText = `Temperatura actual: ${grados}º`
// } else if(grados >= 0 && grados <15){
//     h1.style.color = '#A6F7F5';
//     h1.innerText = `Temperatura actual: ${grados}º`
// } else if(grados >= 15 && grados <25){
//     h1.style.color = 'green';
//     h1.innerText = `Temperatura actual: ${grados}º`
// } else if(grados >= 25 && grados <30){
//     h1.style.color = 'yellow';
//     h1.innerText = `Temperatura actual: ${grados}º`
// } else if(grados >= 30 && grados <35){
//     h1.style.color = 'orange';
//     h1.innerText = `Temperatura actual: ${grados}º`
// } else if(grados >=35){
//     h1.style.color = 'red';
//     h1.innerText = `Temperatura actual: ${grados}º`
// }

// }

// temperaturaActual(temperatura)



// progreso✅
// Crear una barra de progreso con dos divs anidados. Hacer un programa que al iniciarse pregunte mediante un prompt por un porcentaje de progreso y modifique el ancho de la barra de progreso respectivamente (si se ingresa 75 la barra de progreso tiene que ocupar el 75% de la barra contenedora)


// let porcentaje = prompt('Cuál es el porcentaje de progreso?');

// let progreso = $('.progreso');

// progreso.style.width = `${porcentaje}%`;


// reacciones✅
// En un documento html hacer un post de una red social que contenga:

// un h3 con la usuaria
// un p con un lorem ipsum
// 3 spans de reacciones con un ícono (por ejemplo Me gusta, Me encanta, Me asombra) más un número con la cantidad

// Dar estilos para que

// la tipografía sea distinta a la default
// los spans estén en línea, separados con márgenes, tengan un color de fondo gris suave y un border radius
// Hacer un programa que al iniciarse pregunte mediante tres prompts por la cantidad de cada una de las reacciones y actualice los valores de los spans correspondientes

// let meGusta = prompt('Cuantos "me gusta" obtuviste?');

// let meEncanta = prompt('Cuantos "me encanta" obtuviste?');

// let meAsombra = prompt('Cuantos "me asombra" obtuviste?');

// let numeroMeGusta = $('.numeroMeGusta');

// let numeroMeEncanta = $('.numeroMeEncanta');

// let numeroMeAsombra = $('.numeroMeAsombra');

// numeroMeGusta.innerText = `${meGusta}`;

// numeroMeEncanta.innerText = `${meEncanta}`;

// numeroMeAsombra.innerText = `${meAsombra}`;




// card✅
// Hacer un programa que al iniciarse pregunte mediante prompts por

// un título
// una url de una imagen
// una url a un artículo
// Utilizar esos datos para completar en el html una card que tenga

// una imagen, con la url de la imagen ingresada
// un título, con el texto del título ingresado
// un link que diga Leer más, con la url al artículo ingresado
// Dar algunos estilos mínimos a la card:

// centrarla con respecto a la pantalla
// agregarle un borde
// agregarle un sombreado
// cambiarle la tipografía
// cambiarle los tamaños de fuente
// cambiarle los colores por defecto

// let tituloIngresado = prompt('Ingrese un título de una película');
// let imagenIngresada = prompt('Ingrese la url de la imagen de portada');
// let articuloIngresado = prompt('Ingrese la url de la info de la película');

// let card = $('.cont-card');

// card.innerHTML = ` 
// <div class="cont-img">
// <img src="${imagenIngresada}" alt=""></div>
// <h1>${tituloIngresado}</h1>
// <a href="${articuloIngresado}" target="_blank">Leer más</a>`;


//https://es.wikipedia.org/wiki/Harry_Potter#Harry_Potter_y_la_piedra_filosofal

//https://media.ambito.com/p/0333767c1a34622ed1a07f419bd64293/adjuntos/239/imagenes/039/373/0039373828/harry-potter-y-la-piedra-filosofal.png?2021-10-06-12-28-30







// animales✅
// En un documento html agregar al menos tres imágenes de distintos animales, una por cada animal. Hacer un programa que al iniciarse pregunte mediante un prompt por un animal (indicando en el mensaje las opciones disponibles) y muestre solamente la imagen del animal elegido.


// let animalElegido = prompt('Qué animal desea ver? Ingrese: 01 - Si desea ver un oso panda, 02 - Si desea ver un tigre o 03 Si desea ver un perrito');

// let animal = $('.cont-animal');


// let imprimirAnimal = (elegido)=>{
//     if(elegido == '01'){
//         animal.innerHTML= `<img src="https://i.pinimg.com/564x/87/14/6d/87146dc18a957081a579f1b966057bbb.jpg" alt="" class="panda">`;
//     }  else if(elegido == '02'){
//         animal.innerHTML= `<img src="https://i.pinimg.com/564x/74/bb/eb/74bbeb6b5b3be0483bbfe5b46024bf24.jpg" alt="" class="tigre">`;
//     } else if(elegido == '03'){
//         animal.innerHTML= `<img src="https://i.pinimg.com/564x/23/2b/30/232b306671e2857cb199d83023dbbcef.jpg" alt="" class="perrito">`;
//     }

// }

// imprimirAnimal(animalElegido);



// paises❌
// En un documento html crear una lista desordenada con distintos paises de cada continente (entre 2 y 4 por continente). Hacer un programa que al iniciarse pregunte mediante un prompt por un continente y destaque en rojo y en negrita aquellos paises de dicho continente.

// let paises = document.getElementById("paises");
// //// let america = document.getElementsByClassName('america')
// console.log(paises);
// //// console.log(america)
// //// console.log(window)
// //// console.log(document)

// let america = document.querySelector("#america");
// let europa = document.querySelector("#europa");

// let continente = prompt("Ingrese un continente (america)");
// ////let continente = "america";

// if (continente === "america") {
//   console.log("ES AMERICA 🙋‍♂️");
//   america.classList.add("continente");
// }

// if (continente === "europa") {
//   console.log("ES EUROPA 🙋‍♂️");
//   europa.classList.add("continente");
// }

// if (continente === "asia") {
//   console.log("ES ASIA 🙋‍♂️");
//   asia.classList.add("continente");
// }

// if (continente === "africa") {
//   console.log("ES AFRICA 🙋‍♂️");
//   africa.classList.add("continente");
// }





// comidas✅
// En un documento html agregar imágenes de comidas, postres y bebidas (3 o 4 de cada uno). Dar estilos para que se muestren una al lado de la otra, que tengan algo de espacio con margenes y que tengan el mismo tamaño. Hacer un programa que al iniciarse pregunte mediante un prompt qué se desea ver (comidas, postres o bebidas) y mostrar sólo las imágenes de la categoría correspondiente.

// let $ = (selector)=> document.querySelector(selector);

// let contenedor = $('.container');

// let eleccionUsuario = prompt('Qué desea ver?? Ingrese 01 si desea ver comidas, ingrese 02 si desea ver postres, ingrese 03 si desea ver bebidas');

// let imprimirEleccion = (eleccionUsuario)=>{
//     if (eleccionUsuario == '01'){
//         contenedor.innerHTML =`
//         <img src="https://i.pinimg.com/564x/71/6f/3c/716f3c3e8c63a5177919cf25a9b59c57.jpg" alt="" class="comidas">
//         <img src="https://i.pinimg.com/564x/6e/72/90/6e7290cec68166225f63fd11ab2bb708.jpg" alt="" class="comidas">
//         <img src="https://i.pinimg.com/564x/59/20/56/59205665db14d2718bb0bb97ea93b5bd.jpg" alt="" class="comidas">`
//     } else if (eleccionUsuario == '02'){
//         contenedor.innerHTML=`<img src="https://i.pinimg.com/564x/2a/4b/6b/2a4b6bf8fc5028a5cfb3aca3be3f0141.jpg" alt="" class="postres">
//         <img src="https://i.pinimg.com/564x/27/5c/51/275c51a4e54803c5a67718a48c0ad7ed.jpg" alt="" class="postres">
//         <img src="https://i.pinimg.com/564x/e1/9a/57/e19a571ed6b7a15a2d477040c7d73161.jpg" alt="" class="postres">`
//     } else if(eleccionUsuario == '03'){
//         contenedor.innerHTML = `
//         <img src="https://i.pinimg.com/564x/bf/13/bd/bf13bdc4145ff11703b321a9edbf5223.jpg" alt="" class="bebidas">
//         <img src="https://i.pinimg.com/564x/18/a8/2f/18a82fff1cc167b964f3e2642f5a46af.jpg" alt="" class="bebidas">
//         <img src="https://i.pinimg.com/564x/a5/78/83/a57883547d408e091fd4d9438c6bb5ed.jpg" alt="" class="bebidas">`
//     }
// }

// imprimirEleccion(eleccionUsuario);





// busqueda❌
// En un documento html crear una lista desordenada con al menos 10 items que consistan en oraciones, frases o citas. Hacer un programa que al iniciarse pregunte mediante un prompt por una palabra y destaque en rojo y en negrita aquellos items de la lista cuyo texto contenga dicha palabra.
// let $ = (selector)=> document.querySelectorAll(selector)


let $ = (selector) => document.querySelector(selector);

// let oracionUno = document.querySelector('#oracionUno')
let oracionUno = $("#oracionUno");
let oracionDos = $("#oracionDos");
let oracionTres = $("#oracionTres");

let palabra = prompt('Ingrese una palabra')

console.log(oracionUno)

let textoOracionUno = oracionUno.innerText;  //se busca el texto en el objeto con un .innertext
let textoOracionDos = oracionDos.innerText;
let textoOracionTres = oracionTres.innerText;

if(textoOracionUno.includes(palabra)){
  oracionUno.style.color = 'red';
  oracionUno.style.fontWeight = 'bold';
}

if(textoOracionDos.includes(palabra)){
  oracionDos.style.color = 'red';
  oracionDos.style.fontWeight = 'bold';
}

if(textoOracionTres.includes(palabra)){
  oracionTres.style.color = 'red';
  oracionTres.style.fontWeight = 'bold';
}

