// Tag HTML da usare
const button = document.getElementById('btn_calc');
const element_cost_km = document.getElementById('inputCost');
const element_user_age = document.getElementById('inputAge');
const element_user_km = document.getElementById('inputKm');

// Definizione Cosanti 
// const cost_km = 0.21;
const minor = 18;
const over = 65;
const discount_minors = 20;
const discount_over = 40;
let price;

// Take Variabili from user with prompt
// const user_age = Number(prompt('Inserisci la tua età'));
// const user_km = Number(prompt('Inserisci i Km'));

// if (user_age <= minor) {
//   price = (cost_km * user_km) - ((cost_km * user_km) * discount_minors) / 100
// } else if (user_age >= over) {
//   price = (cost_km * user_km) - ((cost_km * user_km) * discount_over) / 100
// } else {
//   price = (cost_km * user_km)
// }
// console.log(price.toFixed(2) + '€');

//# operazioni di iterazioni
// al click del bottone 
button.addEventListener('click', calcKm)

// Funzioni
function calcKm() {
  const cost_km = element_cost_km.value;
  const user_age = element_user_age.value;
  const user_km = element_user_km.value;

  if (user_age <= minor) {
    price = (cost_km * user_km) - ((cost_km * user_km) * discount_minors) / 100
  } else if (user_age >= over) {
    price = (cost_km * user_km) - ((cost_km * user_km) * discount_over) / 100
  } else {
    price = (cost_km * user_km)
  }
  console.log(price.toFixed(2) + '€');
}