

let menu = document.getElementById('menu')
let img_icon = document.getElementById('img_icon');

img_icon.addEventListener('click', function (e) {
  menu.classList.toggle('menu-toggle');

  const rutaActual = e.target.getAttribute('src', './icon/menu.png');
  const ul = document.getElementById('menu');
  if (rutaActual === './icon/close.png') {
    e.target.setAttribute('src', './icon/menu.png')

  } else {
    e.target.setAttribute('src', './icon/close.png')
  }
})

let information = document.getElementById('pet').children;

//selección de la img1
let img = document.getElementById('gatito2')

//se le otrorga una acción de click que accionara a la función
img.addEventListener('click', function (e) {
  //función de cambio de imagen
  //se guarda la ruta de la img1 en la variable imgActual
  let gato = document.getElementById("gatito1").src;
  console.log(gato)
  let imgActual = e.target.getAttribute('src', '/img/gatito2 1.png')
  let img1 = document.getElementById('gatito1');
  let imgCam = e.target.getAttribute('src', '/img/gatito 1.png')
  for (let i = 0; i < information.length; i++) {
    console.log(information[i].classList.remove("active"))
  }
  //se inicia una condicional, si imgActual es igual a gatito2 1.png
  if (imgActual == '/img/gatito2 1.png') {
    //se cumple que imgActual seria gual a gatito1.png
    imgActual = e.target.setAttribute('src', '/img/gatito 1.png')
    //imgCambio = e.target.setAttribute('src', '/img/gatito2 1.png')
    //console.log(imgCambio);
  } else {
    imgActual = e.target.setAttribute('src', '/img/gatito2 1.png')
  }
})

/*const thumbs = document.querySelector(".pet").children;
console.log(thumbs)
let img = document.getElementById('pets');
img.addEventListener('click', function changeImage(event) {
  console.log(document.querySelector(".gatito1").src = event.children[0].src);
  for (let i = 0; i < thumbs.length; i++) {
    thumbs[i].classList.remove("active");
  }
  event.classList.add("active");
})*/