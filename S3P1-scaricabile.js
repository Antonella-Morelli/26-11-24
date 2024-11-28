/* ESERCIZIO 1
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

let num1 = 5
let num2 = 5
const crazySum = function (numero1, numero2) {
    if (num1 === num2) { return (num1 + num2) * 3 }
    else { return num1 + num2 }
}
crazySum()

/* ESERCIZIO 2
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

let numero = 21
const boundary = function (number) {
    if ((numero >= 20 && numero <= 100) || numero === 400) { return true }
    else { return false }
}
boundary()

/* ESERCIZIO 3
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

let strin = 'paracadute'
const reverseString = function (string) { return strin.split("").reverse().join(""); }
reverseString()

/* ESERCIZIO 4
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

let upperFirst = function (lettera) {
    let parola = lettera.split(" ")
    let frase = []
    for (let i = 0; i < parola.length; i++) {
        let primalett = parola[i].charAt(0)
        let maiuscola = primalett.toUpperCase()
        let separa = parola[i].slice(1)
        let Parola = maiuscola + separa
        frase.push(Parola)
    }
    console.log(frase.join(" "))
}
upperFirst("ciao mi chiamo antonella ")

/* ESERCIZIO 5
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

//EXTRA:
/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

let altezza = 5
let base = 6
let area = function (l1,l2) { return (altezza * base) }
area()

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

let num3 = 39
let num4 = 19
const crazyDiff = function (numero3, numero4) {
    if (num3 - num4 > 19) { return (num3 - num4) * 3 }
    else { return (num3 - num4) }
}
crazyDiff()

/* ESERCIZIO 3
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

let word = 'ciao'
let codify = function (parola) {
if (word.startsWith('code')) 
{return word}
else {return word + ' ' + 'code'}
}
codify()

/* ESERCIZIO 4
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

let num5 = 6
let check3and7 = function(numero) {
if (num5 % 3 === 0 || num5 % 7 === 0) 
{return true} 
  else {return false}
}
check3and7()

/* ESERCIZIO 5
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

let stringa = 'paracadute'
const cutString = function (string) { return stringa.slice(1, -1) }
cutString()