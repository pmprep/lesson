# Gyakorló feladat

## Rávezetés

- A feladatok a ciklusokra való rávezetést segítik

```javascript
//Az alábbi kód hányszor fog lefutni? Hányszor íródik ki a "Szia"?
let i = 0;
while(i<10){
    console.log("Szia")
    i=i+1;
}

//Az alábbi kód hányszor fog lefutni? Hányszor íródik ki a "Szia"?
let i = 1;
while(i<=9){
    console.log("Szia");
    i=i+1;
}

//Az alábbi kód hányszor fog lefutni? Hányszor íródik ki a "Szia"?
let i = 10;
while(i>0){
    console.log("Szia");
    i=i-1;
}

//Az alábbi kód hányszor fog lefutni? Hányszor íródik ki a "Szia"?
let i = 9;
while(i>=0){
    console.log("Szia");
    i=i-1;
}

//Mit kell a kérdőjel helyére írni, hogy a ciklus 10 alkalommal lefusson?
let i = ?
while(i<10){
    console.log("Szia");
    i=i+1;
}

//Mit kell a kérdőjel helyére írni, hogy a ciklus 10 alkalommal lefusson? Több megoldás is lehetséges
let i = 0;
while(i ? ?){
    console.log("Szia");
    i=i+1;
}

//Mit kell a kérdőjel helyére írni, hogy a ciklus 20 alkalommal lefuson
let i = 0;
while(i<20){
    console.log(i);
    ?
}

//Mit kell a kérdőjel helyére írni, hogy a ciklus 10 alkalommal fusson le?
let i = 2;
while(i<20){
    console.log(i);
    ?
}

//Az alábbi ciklus le fog futni? Ha igen hányszór? Ha nem, miért nem?
let i = 10;
while(i<10){
    console.log("Lefutottam");
    i=i+1;
}

//Mi az i változó értéke a ciklus UTOLSÓ lefutása UTÁN?
let i = 0;
while(i<10){
    console.log(i);
    i=i+1;
}
i=?

//Mi az i változó értéke a ciklus UTOLSÓ lefutása UTÁN?
let i = 0;
while(i<3){
    console.log(i);
    i=i+1;
}
i=?
```

## Feladatok

A feladatoknak minden esetben úgy kell megalkotni a megoldását, hogy ha kicseréljük a bemeneti paramétert (a tömböt), vagy kiegészítjük további éertékekkel, akkor is hibátlanul látják el feladatukat.

Adott egy 1 dimenziós tömb, amiben az alábbi elemek szerepelnek.

```javascript
let t = [
  "mai",
  "napon",
  "megtanulom",
  "hogy",
  "hogyan",
  "mukodnek",
  "javascriptben",
  "a",
  "ciklusok",
];
```

1. Írd ki a tömb tartalmát hagyományos manuális módszerrel, ciklusok nélkül, külön sorba.
2. Készíts egy "catLife" nevű valtozót, amiben eltárolod 't' a tömb hosszát.
3. Készíts egy változót, nevezd el i-nek. Legyen az értéke 0. Hozz létre while ciklust, ami addig fog lefutni míg kisebb mint a catLife értéke. A cikluson belül növeld az i értékét 1-el
4. Készíts egy for ciklust, aminek a belső változó értéke 0. A ciklus addig fusson míg a belső változó értéke kevesebb mint a "catLife" értéke.Írd ki a cikluson belül console-ra a belső változó értékét, minden lefutásnál.
5. Hozz létre egy i nevű változót 0 értékkel. Készíts egy while ciklust ami a 't' tömb hossz alkalommal fut le. Minden alkalommal ahányszor a ciklus lefut, írd ki az i változó értékét. Az i változót 1-el növeld lefutásonként
6. Az 5. feladat alapján hozd létre ugyanazt a while ciklust. Annyi különbséggel, hogy az i változó értéke helyett a 't' tömb 0-1-2-3 stb elemei helyett az i változót írd a [ ] zárójel közé

Adott az alábbi tömb:

```javascript
const animals = ["dog", "koala", "giraffe", "zebra", "panda", "cat"];
```

1. Írd ki a konzolra (külön sorba, ciklussal) az állatok nevét!

1. Írd ki a konzolra az állatok nevét fordított sorrendben!

1. Írd ki a konzolra azon állatok nevét, melyek a-ra végződnek!
