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