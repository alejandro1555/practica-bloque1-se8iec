
  // CONTENIDO DE LA PRÁCTICA:
// Vamos a añadir elementos en una lista (con la clase "color-list") con javascript a partir del array aportado en este documento, en la constante "colorList" (ver imagen en el proyecto "ejemplo_lista.png"). 

// Como se puede apreciar en la imagen, cada elemento que esté en una posición par de de la lista tiene que tener la clase "color-item--odd". Esta clase debe añadirse desde javascript, NO haciendo uso del selector css nth-of-type(odd) o similares. NOTA: En este caso vamos a considerar un elemento par pensando en el primer elemento como el 1 no como el 0.

// Cada elemento del listado contendrá:
//    * El nombre del color.
//    * Una muestra en la que se ve el color.
//    * Un botón que modifica el color del siguiente elemento de la lista.
//    * Un botón que modifica el color del fondo de la página.
// La información de cada item la obtendremos de cada objeto del array "colorList"

// La estructura de un item de la lista deberá quedar con de la siguiente forma en el HTML (ejemplo del item para el color "white"):
// <li class="color-item">
// 	<div class="color-name">Color: white</div>
// 	<div class="color-show">Muestra</div>
// 	<button class="color-set">Next item color</button>
// 	<button class="color-set">Page color</button>
// </li>

// En esta práctica hay que añadir 4 funcionalidades:
//    * Al hacer click directamente (no en un item o botón) sobre el fondo de la página (elemento body), debe aparecer un alert en el que aparezca la palabra "body".
//    * Al hacer click directamente sobre uno de los items de la lista (no en uno de sus botones) debe aparecer un "alert" en el que se indique el nombre de su color.
//    * Al hacer click sobre el botón con el texto "Next item color" deberá aplicarse el color de ese item al color de fondo del siguiente item (el último item cambia al primero).
//    * Al hacer click sobre el botón con el texto "Page color" deberá aplicarse el color de ese item al color de fondo de la página (elemento body).

// Buena suerte!

const colorList = [
  {
    colorName: 'white',
    hex: '#ffffff'
  },
  {
    colorName: 'red',
    hex: '#ff0000'
  },
  {
    colorName: 'orange',
    hex: '#ffa500'
  },
  {
    colorName: 'yellow',
    hex: '#ffff00'
  },
  {
    colorName: 'orchid',
    hex: '#da70d6'
  },
  {
    colorName: 'pink',
    hex: '#ffc0cb'
  },
  {
    colorName: 'green',
    hex: '#008000'
  },
  {
    colorName: 'silver',
    hex: '#c0c0c0'
  }
];

 //Accedemos al elemento ul del codigo html a partir de la clase y la guardamos en una variable
  let elementoLista = document.querySelector('.color-list');

  //Creamos las etiquetas li que tendrá la lista 
  let li1 = document.createElement('li');
  let li2 = document.createElement('li');
  let li3 = document.createElement('li');
  let li4 = document.createElement('li');
  let li5 = document.createElement('li');
  let li6 = document.createElement('li');
  let li7 = document.createElement('li');
  let li8 = document.createElement('li');

//Añadimos las etiquetas a la lista
  elementoLista.appendChild(li1);
  elementoLista.appendChild(li2);
  elementoLista.appendChild(li3);
  elementoLista.appendChild(li4);
  elementoLista.appendChild(li5);
  elementoLista.appendChild(li6);
  elementoLista.appendChild(li7);
  elementoLista.appendChild(li8);



//Añadimos todos los li a un array
liArray= [li1, li2, li3, li4, li5, li6, li7, li8];

//Creamos la estructura HTML con un for
for (var i=0; i<colorList.length; i++){
  liArray[i].innerHTML = "<div class='color-name'> </div> 	<div class='color-show'>Muestra</div> 	<button class='color-set'>Next item color</button> 	<button class='color-set'>Page color</button>";

liArray[i].classList.add("color-item");
  
}

//Añadimos todos los botones a un array 
botonArray = [li1.querySelector('button'), li2.querySelector('button'), li3.querySelector('button'), li4.querySelector('button'), li5.querySelector('button'), li6.querySelector('button'), li7.querySelector('button'), li8.querySelector('button')];

//El boton 2 de cada fila
botonArray2 = [li1.getElementsByTagName('button')[1], li2.getElementsByTagName('button')[1], li3.getElementsByTagName('button')[1],li4.getElementsByTagName('button')[1],li5.getElementsByTagName('button')[1],li6.getElementsByTagName('button')[1],li7.getElementsByTagName('button')[1],li8.getElementsByTagName('button')[1]];

//Boolean que comprueba si alguno de los botones esta siendo pulsado
let botonPulsado = false;

//boolean que comprueba si el li esta siendo pulsado
let boton2= false;


  //Hacemos un bucle for para recorrer la lista y
  for (var i=0; i<colorList.length; i++) {
    botonPulsado = false;
    boton2=false;

  //Añadimos las clases correspondientes a las filas pares
    if(i==0 || i%2==0 ) 
      liArray[i].classList.add("color-item");
    else 
      liArray[i].classList.add("color-item--odd");
    
  //Añadimos los nombres de los objetos a la lista
  let elemento = liArray[i].querySelector('div');
  elemento.innerHTML = colorList[i].colorName;
  //Añadimos el color a los div Muestra
  let elemento2 = liArray[i].getElementsByTagName('div');
  elemento3=elemento2[1];
  elemento3.style.backgroundColor = colorList[i].colorName;
  

//Evento boton Next Item Color
  liArray[i].querySelector('button').addEventListener("click",cambiarColor);

function cambiarColor(){
  botonPulsado=true;
 //Recorremos de nuevo toda la lista
  for (var j=0; j<colorList.length; j++) {
    //Si el boton actual es igual al boton del array, cambiamos de color la fila siguiente por el color que corresponde al boton actual.
    if(this==botonArray[j]) {
      //botonPulsado=false;
      if(j==7) 
        liArray[0].style.backgroundColor = colorList[j].hex;
      else 
        liArray[j+1].style.backgroundColor = colorList[j].hex;
    }
    else
    console.log("no es el boton");
  }
  
}

//Evento boton PageColor
liArray[i].getElementsByTagName('button')[1].addEventListener("click",cambiarColorPagina);

function cambiarColorPagina(){
  botonPulsado=true;
 //Recorremos de nuevo toda la lista
  for (var j=0; j<colorList.length; j++) {
    //Si el boton actual es igual al boton del array, cambiamos de color del body por el color que corresponde al boton
    if(this==botonArray2[j]) {
    document.body.style.backgroundColor = colorList[j].hex;
     //botonPulsado=false;
    }
    else
    console.log("no es el boton");
  }
  
}


//Mostrar alert con el nombre de la fila
//Evento click cualquier parte de la lista
liArray[i].addEventListener("click",alertNombreColor);

function alertNombreColor(){
 //Recorremos de nuevo toda la lista
  for (var j=0; j<colorList.length; j++) {
    boton2=true;
    //Si el boton actual es igual al boton del array, y ningun boton esta siendo pulsado, mostramos el nombre del color por un alert
    if(this==liArray[j] && botonPulsado==false ) {
    alert(colorList[j].colorName);
    //boton2=false;
    }
    else
    console.log(botonPulsado);
  }
  
}
boton2=false;
botonPulsado=false;

  }

      
//Alert al pulsar en el body
document.body.addEventListener("click",alertBody);

function alertBody(){
 //Recorremos de nuevo toda la lista
    if(botonPulsado==false && boton2==false)
    alert("Body");
    else {
      console.log(" ");
    }
  
  
  
}




