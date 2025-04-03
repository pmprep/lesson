# Tömbök
Míg egy  eddig látott változóban egy értéket tudtunk tárolni addig a tömben többet is tudunk.  
```js
//tömb létre hozása
let myFirstArray = [1,2,"ananász"];
//vagy
let array = new Array();
```
Elem hozáadása tömbhöz
```js
let array = [];
array.push(1);
array.push(3);
```
A tömben minden elemet eltudunk érni az indexe segítségével.  
A tömböket 0 -tól indexxeljük.
```js
//tömb első elemének elérése
let myArray = [1,2,"ananász","krumpli"];
console.log(myArray[0]);
```
A tömbhosszának elérése
```js
let myArray = [1,2,"ananász","krumpli"];

//tömb hosszának elérése
myArray.length;
```
A tömb utolsó elemének elérése
```js
let myArray = [1,2,"ananász","krumpli"];

//tömb utolsó elemének elérése
//mivel 0 -tól indexelünk így az utolsó index a tömb hosszánál egyyel kisebb
myArray[myArray.length - 1];
```
A tömb adott értékének indexének elérése
```js
let myArray = [1,1,1,12,"ananász","krumpli"];

//az első olyan értéknek adja vissza az indexét ami egyezik a keresettel
//eben az esetben 0-át
myArray.indexOf(1);

//ha a tömb nem tartalmaza a keresett elemet akkor -1 et add vissza
myArray.indexOf("hurka töltő");
```
Elem kivétele tömbből
```js
let array = [1,2,3,4,5,6];

//az első szám azt mondja meg hogy melyik elemtől
//a második szám hogy hány elemet vegyen ki 
array.splice(1,2);

//az első szám azt mondja meg hogy melyik elemtől
//a második szám hogy hány elemet vegyen ki
//utána minden felsoroltat bepakol a kezdő indextől
array.splice(1,0,"alma");
```
Tartalmazás vizsgálata
```js
let array = [1,2,3,4,5,6];

//megvizsgálja hogy az adott érték benne van e tömbben
//logikai értékkel tér vissza ha benne van true ha nincs false
array.includes(1);
```
# Tömbök közti egyenlőség vizsgálat
a `==` operátor azt nézi két tömb között hogy ugyanott vannak e a memóriában nem pedig azt hogy ugyanazok e az elemei
```js
let array1 = [1,2,3];
let array2 = [1,2,3];
console.log(array1 == array2); // false
```
