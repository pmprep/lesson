## Gyakorlat tematika

```javascript
//1. Mi lesz a console-ra kíírva?
let value = 1;
console.log(value);

//2. Mi lesz a console-ra kíírva?
let greetings = "bonjour";
console.log(greetings);

//3. Mi a változó értéke?
let cica;
console.log(cica)

//4.Le tud futni az alábbi kód? Ha igen miért, ha nem miért nem?
let isGood true;

//5. Le tud futni az alábbi kód? Ha igen miért, ha nem miért nem?
console.log(value);
let value=10;

//6. Mennyi lesz az eredmény értéke?
let value = "10";
let eredmeny = value+10;
console.log(eredmeny);

//7. Mi lesz a változó értéke?
let number = Number(prompt("Kérek egy számot")) //beírt érték "satufa"
console.log(number) //?

//8. Mit kell a kérdőjelhez írni, hogy a várt eredményt kapjuk?
let a = ?;
console.log(a) //"26"

let a = ?;
console.log(a) //26

let a = ?;
console.log(a) //"true"

let a = ?;
console.log(a) //false

```

9. Kérj be egy jelszót a felhasználótól. Ha a jelszó rövidebb, mint 6 karakter, írd ki, hogy túl rövid!

   - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length

10. Kérj be egy testsúlyt. Ha nem pozitív szám, írd ki, hogy csak pozitív szám lehet.

11. Kérj be két számot, egy osztandót és egy osztót. Ellenőrizd le, hogy az osztás eredménye érvényes szám-e. Ha nem szám, írd ki, hogy az eredmény érvénytelen.

12. Kérj be egy számot a felhasználótól. Ha kisebb vagy egyenlő, mint nulla írd ki, hogy “csak pozitívan! :)”

13. Kérd be a felhasználó nevét. Ha nem írt be semmit, írd ki, hogy “ej, de titokzatos vagy!”

14. Hozz létre 2 változót kérd be a felhasználótól mind a kettőt, az egyik legyen egy érték (number), a másik meg egy szöveg (string). Ha a felhasználó 18-nál nagyobb számot adott meg és a szöveg az "Bob" akkor írja ki felugró ablakba, "Szia Bob"

15. Készíts egy gyorshajtási bírság kalkulátort, ami a megengedett sebességet vizsgálja, és ezt követően megadott sebességünk alapján kiszámolja, milyen bírságra számíthatunk.

- Az egyszerűség kedvéért:
  - a megengedett sebesség +16 és 25km/h között 39.000Ft
  - a megengedett sebesség +26 és 35km/h között 58.500Ft
  - a megengedett sebesség +36 és 45km/h között 78.000Ft
  - a megengedett sebesség +46 és 55km/h között 117.000Ft
  - a megengedett sebesség +56 és 65km/h között 169.000Ft
  - a megengedett sebesség +66 és 75km/h között 260.000Ft
  - a megengedett sebesség 76km/h felett 390.000Ft a bírság
- Az alapvetően elfogadható megengedett sebesség kategóriák:
  - 30km/h, 50km/h, 90km/h, 110km/h

16. Készíts egy alkohol szonda értékelőt.

- A köztudatban az alábbi értékek alapján sorolják be az alkoholszintet
  - Tiszta tudállapot: 0-0.5 ezrelék
  - Enyhe ittasság: 0.5-1.2 ezrelék
  - Ittasság: 1.2-2.5 ezrelék
  - Zavart viselkedés: 2.5-3.0 ezrelék
  - Aluszékonyság: 3.0-4.0 ezrelék
  - Életveszélyes állapot: 4.0-5.0 ezrelék
- Készíts egy programot amely bekér egy ezrelék alapú értéket 0-5 között (lehet tidezes tört is), majd a fenti sorok alapján értesítsd a felhasználót, mibe sorolják az ilyen szintű ittasságot.

17. Nagyon sokan vásárolnak használt autót manapság, hiszen új autóra kevesen költhetnek. Amikor megveszünk egy használt autót, nem csak a vételárat kell kifizessük, hanem az átíratási költségeket is.

- Készíts egy programot ami egy használt autó átírásakor felmerülő költségeket összesíti
- Az alábbiak szerint kell, hogy készíts egy számító rendszert:
  - Hengerűrtartalom alapján fizetünk eredetiség vizsgálati díjat:
    - 1400cm3-ig 17.000Ft
    - 1401cm3-2000cm3 között 18.500Ft
    - 2001cm3 felett 20.000Ft
  - Az autó évjárata mérvadó a vagyonszerzési illeték megfizetésekor:
    - 0-3 év között:
      - 0-40kW: 550Ft / kW
      - 41-80kW: 650Ft / kW
      - 81-120kW: 750Ft / kW
      - 120kW felett: 850 Ft/ kW
    - 4-8 év között:
      - 0-40kW: 450Ft / kW
      - 41-80kW: 550Ft / kW
      - 81-120kW: 650Ft / kW
      - 120kW felett: 750 Ft/ kW
    - 8 év felett:
      - 0-40kW: 300Ft / kW
      - 41-80kW: 450Ft / kW
      - 81-120kW: 550Ft / kW
      - 120kW felett: 650 Ft/ kW
  - Minden átíráskor egy egyszeri:
    - Rendszám (ha kér 8500Ft)
    - Forgalmi engedély 6000Ft
    - Törzskönyv 6000Ft
- A gépjármű életkorát aszerint számold ki, hogy idén 2023-at írunk így rögzítheted az évet, vagy használd az alábbi függvényt:

- `new Date().getFullYear() `

### 1. felnőtt

Bob bemegy a boltba cigarettát vásárolni. Elkérik a személyi igazolványát,
hogy meggyőződjenek róla.
Írj egy programot, ami bekéri, hogy mennyi idős Bob és kiírja, hogy vásárolhat-e
cigarettát!

### 2. kedvezmény

Alice biztosítást szeretne kötni. A biztosítás díjából kedvezményt kaphat, ha nem
volt balesete az elmúlt 5 évben.

A biztosítás díja 120000 HUF egy évre. A kedvezmény mértéke 24000 HUF.
Írj egy programot, ami bekéri, hogy volt-e baleset az elmúlt 5 évben és kiírja
a fizetendő díjat. Ha nem volt baleset, akkor a kedvezményt levonjuk a díjból.

### 3.köszöntés

Írj egy programot, ami bekéri hány óra van 24 órás alakban és a megfelelő köszöntést
írja ki!

- 10 óra előtt: jó reggelt
- 10 óra után: jó napot!
- 18 óra után: jó estét

### 4. átutalás

Alice utalni akar Bobnak.
Írj egy programot, ami bekéri, hogy mennyit szeretne utalni. Ha van elegendő pénz
a számláján illetve, ha a beírt érték szám, akkor történjen meg a tranzakció.

### 5. salsa

Salsázni járunk. Csak akkor mehetünk órára, ha érvényes a bérletünk és van még
alkalom rajta. A bérletnek van egy érvényességi ideje és 10 alkalomra szól.

Írj egy programot, ami bekéri a bérlet érvényességét három lépésben: év, hó, nap,
valamint a fel nem használt alkalmak számát és kiírja, hogy ezzel a bérlettel, a
mai napon, mehetünk-e órára!

### 6. barista

Kávét szeretnénk rendelni. A barista megkérdi, hogy tejet, cukrot kérünk-e és
feljegyzi egy papírra, hogy

- kávé
- kávé, tejjel
- kávé, cukorral
- vagy kávé, tejjel, cukorral

Írj egy programot, ami megkérdezi, hogy a kávét tejjel kérjük-e és, hogy cukrot
kérünk-e bele, és kiírja a megfelelő felsorolt opciót.
