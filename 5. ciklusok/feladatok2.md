## Közepes gyakorló feladatok

1. Kérj be a felhasználótól egy jelszót, ha a jelszó 6 karakternél kevesebb, írjuk ki a felhasználónak, hogy "a jelszó túl rövid"
2. Az 1. feladatot másold le és egészítsd ki azzal, hogy annyi alkalommal kérje be a jelszót amíg a felhasználó nem ír be 6-nál több karaktert.
3. Kérj be a felhasználótól egy számot, amíg nem számot ad meg, kérd be tőle újra
4. Írj egy for/while ciklust ami a i valtozo értékeit eltárolja egy általad létrehozott 't' nevű tömbbe. A ciklus 20 alkalommal fusson le.
5. A 4. feladatban létrehozott tömb elemein futtass le egy ciklust és írd ki a tömb elemeinek a dupláját.
6. Az 5. feladatban levő elemeket tárold el egy újabb 'tt' nevű tömbbe.
7. A 't' és 'tt' tömb elemeit külön add össze és vizsgáld meg, melyik a nagyobb.

8. Írd ki a 2 első 10 hatványát a konzolra (2-től 1024-ig)

9. Írj egy programot, ami kiszámolja 1-től 100-ig a számok összegét, majd a végeredményt kiírja a konzolra (5050-et kell kapnod ha jól dolgoztál)

10. Írj egy programot, ami kiírja a 1-től 100-ig a számokat a konzolra. A hárommal osztható számok helyett írd azt hogy 'Fizz', az 5-el osztható számok helyett írd azt hogy 'Buzz', a hárommal és öttel is osztható számok helyett írd azt, hogy 'FizzBuzz'

11. Írd ki a konzolra azon számokat 1 és 100 között, melyeknek számjegyeik összege 7 (pl.: 7, 16, 25, 34...)

## Közepes-Nehéz gyakorló feladatok

- Adott egy tömb

```javascript
let t = [
  5, 84, 87, 34, 61, 73, 54, 60, 48, 61, 98, 13, 46, 74, 83, 39, 70, 53, 72, 42,
  51, 49, 36, 99, 50, 52, 55, 27, 27, 9, 12, 50, 12, 75, 90, 23, 7, 98, 72, 18,
  48, 10, 69, 43, 9, 84, 51, 73, 25, 62,
];
```

1. Válogasd ki a tömbből a páros számokat egy even nevu tömbbe
2. Válogasd ki a tömbből a páratlan számokat egy odd nevu tömbbe
3. Írd ki a tömb azon indexeit amikhez tartozó értékek nagyobbak mint amit a felhasználó megad.
4. Hasonlítsd össze az even és odd tömböt, hogy melyikben van több elem benne.
5. Ad össze a páros és páratlan tömbbe levő elemek összegét külön. Írd ki melyik az össz értékek közül a nagyobb.
6. Keresd meg a maximum értéket, mind a kettő tömbbe. Írj feltételt, hogy melyik a nagyobb.

- Adott egy tömb

```javascript
let t = [
  74,
  43,
  45,
  NaN,
  41,
  NaN,
  NaN,
  86,
  77,
  NaN,
  58,
  NaN,
  84,
  NaN,
  NaN,
  NaN,
  NaN,
  77,
  47,
  4,
  21,
  NaN,
  NaN,
  95,
  NaN,
  NaN,
  17,
  NaN,
  NaN,
  NaN,
  58,
  22,
  28,
  NaN,
  27,
  NaN,
  39,
  NaN,
  NaN,
  NaN,
  NaN,
  96,
  67,
  38,
  NaN,
  NaN,
  NaN,
  NaN,
  NaN,
  95,
  33,
  NaN,
  NaN,
  95,
  87,
  10,
  NaN,
  NaN,
  55,
  97,
  NaN,
  NaN,
  18,
  70,
  49,
  NaN,
  NaN,
  98,
  18,
  88,
  29,
  35,
  NaN,
  65,
  NaN,
  58,
  3,
  46,
  NaN,
  NaN,
  NaN,
  68,
  NaN,
  NaN,
  23,
  31,
  17,
  40,
  NaN,
  82,
  80,
  52,
  62,
  9,
  21,
  NaN,
  5,
  NaN,
  NaN,
  61,
];
```

1. Keresd meg azokat az értékeket, amik nem NaN-ok. Ezeket rakd egy új tömbbe bele.
2. Válogasd ki a kapott tömbből a páros számokat, rakd egy even tömbbe bele őket.
3. Válogasd ki a kapott tömbből a páratlan számokat, rakd egy odd tömbbe bele őket.
4. Csinálj egy inverz sum-ot mind a kettő tömbre, amiben a tömb elemeinek az összegét nem összeadod, hanem kivonod.
5. Hasonlítsd össze melyik a kisebb érték.

- Adott egy tömb

```javascript
let t = [
  null,
  undefined,
  undefined,
  undefined,
  NaN,
  null,
  "13",
  null,
  NaN,
  null,
  "NaN",
  "NaN",
  undefined,
  NaN,
  "19",
  "NaN",
  "32",
  NaN,
  NaN,
  undefined,
  "NaN",
  NaN,
  "45",
  NaN,
  "10",
  "NaN",
  undefined,
  undefined,
  "22",
  undefined,
  NaN,
  null,
  "74",
  "NaN",
  "NaN",
  undefined,
  undefined,
  "79",
  "92",
  "NaN",
  null,
  undefined,
  NaN,
  undefined,
  null,
  undefined,
  null,
  undefined,
  null,
  NaN,
  null,
  "24",
  null,
  "NaN",
  "NaN",
  undefined,
  "90",
  undefined,
  "NaN",
  NaN,
  undefined,
  undefined,
  undefined,
  undefined,
  undefined,
  "NaN",
  "23",
  null,
  undefined,
  null,
  "NaN",
  "67",
  undefined,
  NaN,
  NaN,
  null,
  "NaN",
  null,
  undefined,
  "NaN",
  undefined,
  undefined,
  "NaN",
  NaN,
  NaN,
  "NaN",
  null,
  null,
  "64",
  "88",
  undefined,
  null,
  "47",
  undefined,
  "89",
  "33",
  undefined,
  undefined,
  null,
  NaN,
  undefined,
  null,
  "70",
  NaN,
  null,
  "NaN",
  undefined,
  null,
  "NaN",
  undefined,
  undefined,
  "42",
  undefined,
  "NaN",
  undefined,
  null,
  undefined,
  "NaN",
  "NaN",
  NaN,
  "NaN",
  undefined,
  null,
  "NaN",
  "88",
  NaN,
  "59",
  NaN,
  NaN,
  "33",
  undefined,
  null,
  undefined,
  "NaN",
  null,
  "NaN",
  "NaN",
  null,
  NaN,
  null,
  "NaN",
  null,
  undefined,
  NaN,
  "NaN",
  "80",
  "38",
  NaN,
  undefined,
  null,
  undefined,
  "NaN",
  "0",
  null,
  null,
  "18",
  undefined,
  null,
  null,
  undefined,
  "NaN",
  "31",
  "17",
  NaN,
  "NaN",
  undefined,
  "NaN",
  NaN,
  NaN,
  null,
  null,
  NaN,
  "11",
  NaN,
  NaN,
  null,
  NaN,
  "80",
  undefined,
  NaN,
  null,
  "61",
  NaN,
  "NaN",
  undefined,
  "23",
  NaN,
  "90",
  "32",
  NaN,
  "NaN",
  "NaN",
  "53",
  null,
  NaN,
  undefined,
  "42",
  undefined,
  "NaN",
  "40",
];
```

1. Keresd meg azokat az értékeket, amik se nem NaN-ok, se nem undefined-ok, se nem null értékek. A stringbe levő számokat konvertáld át number értékké. Ezeket rakd egy új tömbbe bele.
2. Számold meg hány darab NaN, null, undefined érték van a tömbbe. Ezeket írd ki a console-ra
3. A stringbe levő számokat konkatenáld össze, majd alakítsd numberré. Az értéket tárold el egy változóba
4. A stringből numberré alakított számokat add össze és tárold el egy változóba.
5. A két kapott összeg értéket hasonlítsd össze, melyik a nagyobb.

## Nehéz feladatok

Az alábbi feladatok végrehajtásánál, szükséges lehet az alábbi kiegészítés
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration#break_statement

1. Írj ciklusokat, ami kiszámolja egy tömb minden második elemének összegét!
   Az eredményt írd a konzolra

```javascript
let t1 = [1]; // 0
let t2 = [1, 2, 3]; // 2
let t3 = [1, 2, 3, 4, 5]; // 2 + 4
let t4 = [1, 2, 3, 4, 5, 6]; // 2 + 4 + 6
```

2. Az alábbi tömbben keresd meg az alábbiakat, és írd ki az indexüket

- Első pozitív szám
- Első negatív szám
- 10-nél nagyobb

```javascript
let t = [1, -1, 0, 100, 42];
```

3. Adottak egy hallgató jelenléti adatai, témakörönként és óránként. Hány témakör volt, ahol legalább 3 hiányzás volt?

```javascript
let t1=[false, true, false, true], // 2 hiányzás
let t2=[true, true, false, true, false, false], // 3 hiányzás!
let t3=[false, true, false, true, false]; // 3 hiányzás!

//eredmény 2
```

4. Legyen t szavakat tartalmazó tömb. Írjuk ki a szavak hosszait!

```javascript
let t = ["cica", "", "kutya", "tank"];
//4
//0
//5
//4
```

5. Legyen t szavakat tartalmazó tömb! Írjuk ki a szavak konkatenációját (összefűzött alakját)

```javascript
let t = ["cica", "", "kutya", "tank"];
```

6. Adott egy tömb:

```javascript
let t = [10, 35, 20, 40, 5, 70, 110, 30, 90, 70];
```

    - Keresd meg a maximum értéket
    - Kérj be a felhasználótól egy értéket, és írd ki console-ra hogy megtalálható-e ez a szám a tömbbe. És ha igen, hanyadik elem a tömbbe.
    - Készíts egy tömböt amibe kiválogatod a páros számokat
    - Készíts egy tömböt amibe kiválogatod a páratlan számokat

## Extra

1. Írj egy ciklust, ami feltölt egy üres tömböt 3 felhasználótól bekért értékkel. Egy bekérés mindaddig ismétlődjön, amíg a felhasználó számot nem adott meg!

2. Készíts egy 2-es számrendszerből átváltót 10-es számrendszerbe
   A 2-es számrendszer a 2 hatványait számolja, ez alapján vizsgálódik. Az informatika alapból az 1 és 0 közti kapcsolatot nézi, (kap áramot vagy nem). Ezt alapul véve számoljuk ki a stringként bevitt mezőket, és írjuk ki, hogy az 10-es számrendszerbe mennyinek felel meg

```javascript
let numSys2 = "1"; //1
let numSys2 = "01"; //2
let numSys2 = "11"; //3
let numSys2 = "01010101"; //85
let numSys2 = "110101000010"; //3394
let numSys2 = "10101011111011111"; //88031
```

3. Készíts egy szöveg bekérő programot ami addig kér be egy értéket, amíg nemüres sztringet nem kap!

4. Készíts egy szöveg bekérő programot ami legfeljebb **n** alkalommal próbálkozik egy nemüres sztringet bekéréssel! Ha nem sikerül, írja ki hogy "nem sikerült bekérni"

5. Készíts egy szöveg bekérő programot, egy min és max és string értéket kér be, Ezt addig tegye amíg legalább min, de legfeljebb max hosszú sztringet nem kap!

6. Készíts egy szöveg bekérő programot, egy min és max és string és **n** értéket kér be. Ezt addig tegye amíg legalább min, de legfeljebb max hosszú sztringet nem kap, de legfeljebb **n** alkalommal. Ha nem sikerül, írja ki hogy "nem sikerült bekérni"

7. Adott egy kétdimenziós tömb. A kétdimenziós tömb (tömb a tömbben)
   Az első érték a rendszám, a második a név, harmadik a sebesség, negyedik az életkor
   - A t[0][0] = "AAA-001"
   - A t[1][1] = "Cecil Cecilia"

```javascript
let t = [
  ["AAA-001", "John Doe", 40, 18],
  ["ABA-001", "Cecil Cecilia", 50, 20],
  ["ACA-001", "Bob Buffalo", 60, 19],
  ["ACC-001", "Dean Deel", 70, 22],
  ["MNO-321", "Kiss Laura", 70, 30],
  ["XYZ-789", "Nagy Anna", 65, 28],
  ["ABC-123", "Kovács Péter", 80, 35],
  ["JKL-456", "Tóth Gábor", 95, 42],
  ["EFG-456", "Molnár Éva", 75, 29],
  ["HIJ-789", "Farkas István", 55, 50],
];
```

- Írd ki az összes sort
- Keresd meg a tömbben "John Doe" hány éves. Használj for ciklust
- Keresd meg hány 30 éven aluli van. Írd ki a számukat
- Ha 50 a sebesség határ, hányan lépték túl?
- Mi az átlag sebesség a statisztika alapján?

## Maximum kiválasztás

1. Kérj be a felhasználótól egy számot és elenőrizd hogy valóban számot adott-e meg, ha nem kérj újat amíg számot nem add.
2. Kérj be a felhasználótól annyi számot amennyit az előző feladatban adott meg és járj el ugyan úgy (ha nem szám újat kérsz), illetve ezeket a számokoat helyezd egy tömbbe.
3. Írd ki konzolra a tömb legnagyobb elemét.
4. Írd ki konzolra a tömb két legnagyobb elemét.

## Prím szám

1. Kérj be a felhasználótól egy számot és elenőrizd hogy valóban számot adott-e meg, ha nem kérj újat amíg számot nem add.
2. Döntsd el hogy a szám prímszám-e  
   `Hint: Azok a számok prímszámok amik csak 1-el és önmagukkal oszthatóak`

## Osztók számma

1, Írj programot, ami kiírja egy pozitív, egész szám osztóinak a számát!  
Pl. a 34-nek 4 db osztója van (1, 2, 17 és 34).

## Barkóba

1. Éges be egy számot (tárolj el változóban egy fix számot) inenntől ez a szám a gondolt szám
2. Kérj be a felhasználótól egy számot és írd ki konzolra hogy a gondolt szám kisebb e ennél vagy nagyobb
3. ismételd az előző lépést amíg a tipp megegyezik a gondolt számmal
4. A beégetett szám legyen random  
   (Hint: https://www.w3schools.com/js/js_random.asp)

## Szökőév

1. Kérj be egy évszámot a felhasználóttól
2. Írd ki konzolra hogy szökőév-e  
   (Minden 4. év szökőév, de minden 100. nem az, viszont minden 400. mégis csak az)
