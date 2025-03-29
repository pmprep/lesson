# JS
A kód lehetséges helye egy html fájlban és az első kódunk:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script>
        console.log('Hello Word!')
    </script>
</head>
<body>
    
</body>
</html>
```
## Kiiratás és alert
### Kiiratás konzolra
Szöveg más néven string kiiratása:
```js
console.log('Hello')
vagy
console.log("Hello")
```
Szám kiiratása:
```js
console.log(4)
vagy
console.log(10.4)
```
Logikai érték kiiratása:
```js
console.log(true)
```
### Alert
Hasonlóképen műkodik mint a console.log() csak vár egy megerősítést hogy oké vettem
```js
alert(true)
```
## Komment
```js
console.log(true) //inenn kezdve van kommentelve a sor eleje lefut
console.log(true)
// console.log(true) ez a sor komentelve van
console.log(true)
/* innen
ezen
keresztül
komentelve van idáig */
console.log(true)
```
## Szövegek összefűzése azaz konkatenáció és sorendiség
```js
alert('Hello' + ' ' +'Word') //eredmény: Hello Word
alert(5 + 5 + 'Hello') //eredmény: 10Hello
alert('Hello' + 5 + 5) //eredmény: Hello55
alert('Hello' + (5 + 5)) //eredmény: Hello10
```
ezeknek az eredménye egy string
## Tört számok és felsorolás
```js
console.log(3.14) //ez tört szám
console.log(3,14) //ez két érték a 3 és a 14
console.log('Hello', 5 + 5) //ennek az eredménye 2 érték Hello szöveg és 10 szám
```
## Sorrendiség
a sorrendiség alapvetően balról jobbra van ezt befolyásolhatjuk `()` -kel
```js
console.log("Andris vagyok, én is " + 20 + 6 + " éves") // eredmény: "Andris vagyok, én is 206 éves"
console.log("Andris vagyok, én is " + (20 + 6) + " éves") // eredmény: "Andris vagyok, én is 26 éves"
console.log("Andris vagyok, én is", 20 + 6, "éves") // eredmény: "Andris vagyok, én is 26 éves"
```
- Az első pédában amit össze rakunk az egy `string + szám + szám + string`  
mivel egy `string + szám = string` így csak össze fűzi  
  - `"Andris vagyok, én is " + 20 = "Andris vagyok, én is 20"`
  - `"Andris vagyok, én is 20" + 6 = "Andris vagyok, én is 206"`
  - `"Andris vagyok, én is 206" + " éves" = "Andris vagyok, én is 206 éves"`
- A második pédában `()` segítségével meg változtatjuk a sorrendiséget  
így először a két számot adjuk össze aminek az eredménye szám 
  - `20 + 6 = 26`
  - `"Andris vagyok, én is " + 26 = "Andris vagyok, én is 26"`
  - `"Andris vagyok, én is 26" + " éves" = "Andris vagyok, én is 26 éves"`
- A harmadik pédában nem fűzük össze a szöveget így a szám szám ként viselkedik  
és elvégződik az össze adás
  - `20 + 6 = 26`
  - az eredményünk egy `string` egy `szám` és egy `string`
## Változók
Adat tárolására alkalmas.
```js
var firstVar; //változó létrehozása azaz deklarálása
firstVar = 1; //változó érték adása azaz inicalizálása
var otherVar = 3; // van lehetőségünk egy sorban/utasításban deklarálni és inicalizálni is
console.log(otherVar) //kiiratódik a 3 mivel a változó értékét iratjuk ki
```
3 féle lehetőségünk van rá js -ben
```js
var oldOne;
let bestOne; //ezt használjuk
const notBadButWeDontUse;
```
A változó neve mint az előző pédában is látszik kisbetűvel kezdem majd minden új szó esetén nagy betűt használok egybeírva és angol főneveket. Ez az úgynevezet CamelCase.

```js
//HIBÁS KÓD
let bestOne;
let bestOne;
console.log(bestOne);
```
- A változó neveinek egyedinek kell lennie.
- Számmal nem kezdődhet van pár megengedett karakter pl.: $ de kerüljük kezdjük latinbetűvel

## Változók viselkedése
```js
let myVar = 3;
console.log(myVar);
myVar = "Töltöttkáposzta";
alert(myVar);
//a konzolra iratáskor a 3 iratódik ki, de az alert már az Töltöttkáposzta
//ugyanaz a változó tárolhat számot stringet vagy logikai értéket is
```
## Változókkal való műveletek
Mikor hivatkozok a változómra a benne tárolt érték ként viselkedik
```js
let myFirstNumber = 3;
let mySecondNumber = 8;
console.log(myFirstNumber + mySecondNumber);
// ez eredményben ugyan az mint a 
console.log(3 + 8);
let lastNumber = myFirstNumber + mySecondNumber;
// it a last number értéke 3 + 8 azaz 11 lesz
```
### Undefined & NaN
```js
let myUndefined;
console.log(myUndefined); // nincs értéke a változómnak (undefined)
console.log(myUndefined + 5) // NaN (Not a Number)
console.log(myUndefined + "Móka") // undefinedMóka
```


## Adat bekérése
Adat bekérésére a `prompt` -ot használjuk ami szöveget olvas be
```js
let firstNumber = prompt("Adj meg egy számot", 5); //megadjuk az 5-öt
let secondNumber = prompt("Adj meg egy másik", 8); //megadjuk az 8-at
console.log(firstNumber + firstNumber); //az eredmény 58
```
## String át alakítása számmá a `Number()` segítségével
```js
let firstNumber = prompt("Adj meg egy számot"); //megadjuk az 5-öt
let secondNumber = prompt("Adj meg egy másik"); //megadjuk az 8-at
console.log(Number(firstNumber) + Number(secondNumber)); //az eredmény 13
```
```js
let number = "10";
console.log(Number(number)); //az eredmény NaN
```
