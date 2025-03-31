# Elágazások

1. Kérj be a felhasználótól egy számot.

   - Írd ki a console-ra hogyha nagyobb mint 10 "nagyobb mint 10",
   - Írd ki a console-ra hogyha kisebb mint 10 "kisebb mint 10"

2. Kérj be a felhasználótól egy számot.

   - Ha a szám 20 vagy annál több, akkor "A szám nagyobb mint 20",
   - Ha a szám 20-nál kisebb, akkor "A szám kisebb mint 20"

3. Hozz létre egy változót tetszőleges névvel, a változó értéke legyen boolean.

   - Ha az érték igaz, akkor console-on írjuk ki "Szia"
   - Ha hamis akkor pedig felugró ablakba hogy "Viszlát"

4. Készíts egy korhatár ellenőrzőt. Kérj be a felhasználótól egy számot.

   - vizsgáld meg hogyha a szám 18 vagy nagyobb akkor "Successful login"
   - ha nem akkor pedig "login failed, come back in X years"
     **Az X helyére pedig írd be a bekért életkor és 18 különbözetét**

5. Hozz létre egy változót tetszőleges névvel, a változó értékét, tipusát, te választod ki. (haladó)

   - Ha a változó szöveg írjuk ki console-ra:
     - ha szöveg, akkor "szöveg",
     - ha szám, akkor "szám",
     - ha logikai érték pedig "logikai érték" (**TIPP: [typeof](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/typeof)**)
6. Az alábbi feladatnál mi lesz a helyes kimenetel?

```javascript
const happy = false;

if (happy) {
  console.log("I am happy");
} else {
  console.log("I am sad");
}
```

7. Az alábbi feladatnál milyen **értéket** kap a logikai érték?

```javascript
let value = "10";
let isNumber;

if (typeof value == "number") {
    isNumber = true;
}
isNumber=?
```

8. Készíts egy programot egy felvételi pontozására.
- Ha a magyar/matek/angol érettségi: (mindegyik max 50 pontos lehet)
    - 10 pont alatt van akkor 5 pontot kap
    - 10 pont felett de 20 alatt akkor 10 pontot kap
    - 20 pont felett de 30 alatt akkor 15 pontot kap
    - 30 pont felett de 40 alatt akkor 20 pontot kap
    - 40 pont felett 25 pontot kap.
- Ha emelt érettségit csinált valamelyikből, az eredeti kapott ponthoz képest +10 pontot kap
- Ha a diák országos bajnokságon részt vett és első három helyen szerepelt:
    - Bronz után 10 pontot kap
    - Ezüst után 20 pontot kap
    - Arany után 30 pontot kap
- A középiskolai eredményei alapján számolni kell:
    - magyar/matek/angol év végi eredmények:
        - 3-as osztályzat után 10 pont
        - 4-es osztályzat után 15 pont
        - 5-ös osztályzat után 20 pont
- A középfokú nyelvvizsgára jár további 25 pont
- Számold ki az eredményt, és az alábbiakat írd ki:
    - Ha 100 pont alatt van az eredmény: "Sajnos nem jutottál be"
    - Ha 101-150 pont között van az eredmény: "Felvettek a varázsló képzőbe"
    - Ha 150 pont felett van akkor az eredmény: "Mehetsz amelyikbe akarsz"

**BÓNUSZ**

X. Az alábbi feladatnál mi lesz a helyes kimenetel?

```javascript
let number=0;
let isGood=false;
if(!isGood)
    number=number+1;
    isGood=true;

if(isGood)
    number=number+3;

if(!isGood)
    isGood=true;

if(isGood)
    number=10;

number=? //mennyi a number értéke?
```

X. Modellezd le a feladatot, készíts belőle programot

- Egy hamburgerezőben te rád került a sor, hogy kifejleszd azt az új rendszert ami segít, hogy sorban állás nélkül a vásárlók megrendelhessék a kiválasztott hamburgerüket.
- Az étteremben 3 különböző hamburgert lehet rendelni.
- - Sima hamburger (buci, saláta, uborka, hagyma, hús) 1000Ft
  - Sajtos hamburger (buci, saláta, uborka, hagyma, hús, sajt) 1200Ft
  - Vega hamburger (buci, saláta, uborka, hagyma) 1100Ft
- A hamburgerek kérhetők menüben is, a menü ára: burger + 500Ft
- A kivitelezésben annyit kértek, 3 szóval lehessen választani:
-  - "sima", "sajtos","vega"
- A végeredménybe pedig írja ki végösszeget
- EXTRA:
  - Amikor egy hamburgert kiválasztott, írja ki a nevét
  - Írja ki a hozzávalókat is (Tipp: Objektumban tömbbe írd át a hamburgert) - > ['buci', 'saláta', 'uborka', 'hagyma', 'hús']
  - Írja ki a végösszeget is ("Végösszeg: X Ft)
