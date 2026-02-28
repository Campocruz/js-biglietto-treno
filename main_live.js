// Take Variabili from user
const my_adge = Number(prompt('Inserisci la TUA età'));
const your_adge = Number(prompt('Inserisci la SUA età'));

if (my_adge < your_adge) {
  console.log('La tua età è minore della sua')
} else if (my_adge > your_adge) {
  console.log('La tua età è maggiore della sua')
} else {
  console.log('Le vostre età suono uguali')
}


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