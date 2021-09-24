
//Se le da el evento 'load' a window, luego se ejecuta la función

window.addEventListener('load', load)
//se encarga de enlistar los elementos div de la clase keypad-button
//
function load() {
  const display = document.querySelector('.calculator-display')
  console.log(display)
  const keypadButtons = document.getElementsByClassName('keypad-button')
  const keypadButtonsArray = Array.from(keypadButtons)
  console.log(keypadButtonsArray)
  //button representa los botones de la calculadora y cada vez que se de click se ejecuta a la función
  keypadButtonsArray.forEach(button => {
    button.addEventListener('click', () => {
      calculadora(button, display)// callback
    })
  })
}

function calculadora(button, display) {
  console.log(display, button)
  console.log(display.innerHTML, button.innerHTML)
  switch (button.innerHTML) {
    case 'C':
      borrar(display)
      break
    case '=':
      calcular(display);
      break
    default:
      actualizar(display, button)
      break
  }
}

/*function calcular(display) {
  //eval trabaja con caracteres
  display.innerHTML = eval(display.innerHTML)
}*/

const calcular = (display) => display.innerHTML = eval(display.innerHTML)

//const actualizar = (display, button) => !display.innerHTML ? '' : display.innerHTML += button.innerHTML

const borrar = (display) => display.innerHTML = 0

function actualizar(display, button) {
  if (display.innerHTML == 0) {
    display.innerHTML = ''
  }
  display.innerHTML += button.innerHTML;
  console.log(display.innerHTML)
}
/*function borrar(display) {
  display.innerHTML = 0
}*/
