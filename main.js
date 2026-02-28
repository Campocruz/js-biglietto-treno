// Definizione Variabili

const cost_km = 0.21;
const minor = 18;
const over = 65;
const discount_minors = 20;
const discount_over = 40;

let price;
// Take Variabili from user
const user_adge = Number(prompt('Inserisci la tua età'));
const user_km = Number(prompt('Inserisci i Km'));

if (user_adge <= minor) {
  price = (cost_km * user_km) - ((cost_km * user_km) * discount_minors) / 100
} else if (user_adge >= over) {
  price = (cost_km * user_km) - ((cost_km * user_km) * discount_over) / 100
} else {
  price = (cost_km * user_km)
}
console.log(price.toFixed(2) + '€');


// Prove 
let live_user_adge = document.forms["calculator"]["inputAdge"].value;
console.log(live_user_adge);