// capturamos los elementos del DOM que vamos a utilizar
const input = document.getElementById("input");
const sendBtn = document.getElementById("btn");
const result = document.getElementById("result");

// baldes disponibles para comprar
const buckets = [
  { nombre: "7kg", cantidad: 7, precio: 350 },
  { nombre: "14kg", cantidad: 14, precio: 650 },
  { nombre: "28kg", cantidad: 28, precio: 1200 },
];

// funcion para ver cuantos baldes necesito
const checkValue = (value) => {
  console.log(value);
  const quotient = Math.ceil(value / 7);
  const result = quotient / 4;
  const remainder = quotient % 4;
  checkQuotient(result);
  checkRemainder(remainder);
};

// revisamos el cociente
const checkQuotient = (result) => {
  console.log(`Vas a necesitar ${result} baldes de enduido de 28kg.`);
};

// revisamos el resto

const checkRemainder = (remainder) => {
  if (remainder > 0) {
    if (remainder % 2) {
      console.log("vas a necesitar un balde de 7.");
    } else {
      console.log("vas a necesitas un balde de 14.");
    }
  } 
};

// capturamos el texto ingresado en el input
const checkUserInput = () => {
  if (!input.value || isNaN(parseInt(input.value)) || input.value <= 0) {
    alert("Por favor ingrese un numero decimal");
    input.value = "";
    return;
  }
  checkValue(input.value);
  input.value = "";
};

// capturamos cuando se presiona el boton de enviar
sendBtn.addEventListener("click", checkUserInput);

// capturamos cuando se presiona la tecla enter
input.addEventListener("keydown", (e) => {
  if (e.key == "Enter") {
    checkUserInput();
  }
});
