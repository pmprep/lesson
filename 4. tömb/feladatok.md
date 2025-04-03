### Könnyű

1. Készíts egy tömböt, melybe helyezz el 3 elemet, a 3 elem string tipusú legyen, írasd ki őket egymás **mellé** a console-ra.

2. Készíts egy tömböt, melybe rakj bele 5 elemet, az 5 elem number tipusú legyen, írasd ki őket egymás **alá** a console-ra.

3. Készíts egy tömböt, kérj be 3-or a felhasználótól stringet, ezeket helyezd el a tömbbe, irasd ki egymás **mellé** a console-ra.

4. Készíts egy tömböt, kérj be 3-or a felhasználótól adatot. Mindegyik különböző tipusú legyen. Az eddigiekben használt változatokkal kérd be! Majd írasd ki consolera őket egymás **mellé**.

### Közepes

Remainder: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Remainder

1. Készíts egy tömböt és az alábbi adatokkal töltsd fel. A tömbben szereplő értékek dupláját, helyezd át egy másik tömbbe.

2. A tömbben szereplő értékekből készíts vizsgálatot amelyek oszthatóak 2-el, és írasd ki a console-ra

3. A tömbben szereplő értékekből készíts vizsgálatot amelyek oszthatóak 3-el, és írasd ki a console-ra

4. Határozd meg a tömb hosszát, és írasd ki a console-ra az eredményt

```javascript
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
```

## Gyakorlat tematika

### 1. átlag

Írj egy programot, ami három számot bekér egy t tömbbe és kiírja a tömbben
tárolt számok átlagát!

### 2. névlista

Írj egy programot, ami három nevet bekér egy t tömbbe és kiírja a tömbben
tárolt nevek vesszővel elválasztott konkatenációját!

```js
// példa nevek
"alice"
"bob"
"cecil"

// eredmény
"alice, bob, cecil"
```

### 3. szendvics

Egy t tömb egy szendvics tartalmát írja le, pl. `["sonka", "sajt", "tojás"]`.

Kétféle szendvics van: `sajtos` és `sonkás`

- sajtos: sajt, saláta, majonéz
- sonkás: sonka, tojás, torma

Kérd be a felhasználótól melyiket kéri, majd kérd be, hogy milyen extrát kér
(egyszeri bekérés)!

Írd ki a válaszok eredményeként előálló szendvics tartalmát!

Ha `cancel` gombra kattint vagy nem ad meg értéket, akkor nem kért extrát!

Pl.:
```js
// sonkás, szalámi
"sonka, tojás, torma, szalámi"

// sajtos, nem kér extrát
"sajt, saláta, majonéz"

// sonkás, surströmming
"sonka, tojás, torma, surströmming"
```

### 4. allergia

Egy `szendvics` változó egy szendvics tartalmát írja le. Kérj be három hozzávalót
a szendvicsbe és kérd be a felhasználótól, hogy mire allergiás (egy bekérés, legfeljebb 1 tétel),
majd írd ki, hogy elfogyaszthatja-e a szendvicset!

```js
["sajt", "saláta", "majonéz"]   // szendvics
"sajt"                          // allergia
// eredmény: nem eheti meg, sajt van a szendvicsben
false
["sajt", "saláta", "majonéz"]   // szendvics
"mogyoró"                       // allergia
// eredmény: megeheti, nincsen mogyoró a szendvicsben
true
```

### 5. átszállás

Két tömb két személygépjármű utasait írja le. Az egyik autóban nagyon hideg van,
ezért az utasok úgy döntenek hogy átülnek a másikba. Modellezd az átszállást!

A program végén az egyik tömbnek üresnek kell lennie, a másikban pedig az összes
utasnak szerepelnie kell.
```js
// kezdetben
["alice", "bob"]  // egyik
["cecil"]         // másik

// program végén
[]                         // egyik
["cecil", "alice", "bob"]  // másik
```

## Az alábbi tömbbel fogunk dolgozni a következő feladatokban

```javascript
let t = ["alma", "paprika", "szőlő", "kalács"];
```

1. Kérd le a tömb hosszát, írd ki console-ra.

2. Kérd le az összes elem hosszát, majd az összeadott értéket írd ki a console-ra

3. Hozz létre egy új tömböt, az első és második elemet fűzd (konkatenáld) össze, majd helyezd bele az újjonnan létrehozott tömbbe, tedd meg ezt az utolsó előtti, és utolsó elemmel is

4. Adj hozzá egy új elemet a 't' tömbhöz, kérd be az értéket a felhasználótól, ezt követően írd ki a tömb elemeit egymás mellé

5. Hasonlítsd össze a két tömb hosszát, írd ki console-ra hogy a 't' tömb a hosszabb, vagy a második tömb.

6. Kérj be két adatot a felhasználótól, ezeket fűzd össze és add hozzá utolsó elemként a második tömbhöz.