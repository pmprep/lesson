## Operátorok
### Logikai Operátorok
A logikai operátorok egy logikai értéket adnak vissza azaz `true` vagy `false`  
`<` és `>` Operátor
```js
    2 > 1; // érték vizsgálat (olvasuk 2 nagyobb-e 1)
    //eredménye true
    2 < 1; // érték vizsgálat (olvasuk 2 kisebb-e 1)
    //eredménye false
```
`<=` és `>=` Operátor
```js
    2 >= 1; // érték vizsgálat (olvasuk 2 nagyobb vagy egyenlő 1)
    //eredménye true
    2 <= 1; // érték vizsgálat (olvasuk 2 kisebb vagy egyenlő 1)
    //eredménye false
```
Egyenlőség vizsgálat `==` megengedő
```js
    let a;
    a = 1; // érték adás (olvasuk a legyen egyenlő 1)
    2 == 1; // érték vizsgálat (olvasuk 2 egyenlő-e 1)
    // értéke false
```

Egyenlőség vizsgálat `===` szigorú
```js
    "1" == 1; // értéke true
    "1" === 1; // értéke false mert vizsgálja a tipusát is
```
Negáció
```js
    1 == 1; // értéke true
    1 != 1; // értéke false
    1 !== 1; // értéke false
    let boolean = !(10 > 1); // értéke false
    !true; // értéke false
```
`&&` logikai `és`
```js
true && false; // false
false && true; // false
false && false; // false
true && true; // true
```
`||` logikai `vagy`
```js
true || false; // true
false || true; // true
true || true; // true
false || false; // false
```
Ezeket lehet `"kombózni"` is
```js
!(false || true && false); // true
```
### % Operátor
```js
11 % 2; // visza adja az osztás utáni maradékot
// értéke 1
```
```js
11 % 2 == 0; // megvizsgálja hogy a 11 osztható e 2-vel
// false
12 % 3 == 0; // megvizsgálja hogy a 12 osztható e 3-vel
// true
```
### +=, -=, /=, %=, Operátor
```js
let a = 0;
// a kövi 2 sor egy és ugyanaz
a = a + 3;
a += 3;

// a kövi 2 sor egy és ugyanaz
a = a - 4;
a -= 4;

// a kövi 2 sor egy és ugyanaz
a = a / 2;
a /= 2;

// a kövi 2 sor egy és ugyanaz
a = a % 3;
a %= 3;
```
### ++ Operátor
```js
let a = 0;
// a kövi 3 sor egy és ugyanaz
a = a + 1;
a += 1;
a++;
```
### -- Operátor
```js
let a = 0;
// a kövi 3 sor egy és ugyanaz
a = a - 1;
a -= 1;
a--;
```
