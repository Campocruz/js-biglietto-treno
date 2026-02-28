/*
Controllare la maggioranza, la minoranza o l'uguaglianza
di due numeri inseriti dall'utente con la funzione prompt
*/

const my_age = Number(prompt('Inserisci la TUA età'));
const your_age = Number(prompt('Inserisci la SUA età'));

if (my_age < your_age) {
  console.log('La tua età è minore della sua')
} else if (my_age > your_age) {
  console.log('La tua età è maggiore della sua')
} else {
  console.log('Le vostre età suono uguali')
}

/*
Il gioco del pari e dispari usando la funzione random 
per generare un numero da 1 a 9
*/

const user_pair = Number(prompt('Pari digita 1', '1'));
const user_number = Number(prompt('Insert the number from 1 to 9'))
if (!(user_number <= 0 || user_number > 9)) {
  const random_number = Math.floor(Math.random() * 10);
  const sum_number = user_number + random_number;
  console.log(random_number, sum_number)
  if ((sum_number % 2) == 0) {
    console.log('La somma dei numeri è pari')
    if (user_pair == 1) {
      console.log('hai vinto tu')
    }
    else {
      console.log('Ha vinto il computer')
    }
  }
  else {
    console.log('La somma dei numeri è dispari')
    if (user_pair == 0) {
      console.log('hai vinto tu')
    }
    else {
      console.log('Ha vinto il computer')
    }
  }
}
else {
  console.log('Hai inserito un numero sbagliato')
}

/*
Contare quanti minuti restano per la prossima ora
*/

const actual_date = new Date();
const actual_hours = actual_date.getHours();
const actual_minute = actual_date.getMinutes();
let next_hours = actual_hours + 1;
console.log(actual_hours, actual_minute);
if (actual_minute != 0 ) {
  if (next_hours >= 24) {next_hours = next_hours - 24}
  let remain_minutes = 60 - actual_minute
  console.log(`La prossima ora è ${next_hours} e mancano ${remain_minutes} minuti`)
}
else {console.log(`Sono esattamente le ${actual_hours} e mancano esattamente 60 minuti alle ${next_hours}`)}