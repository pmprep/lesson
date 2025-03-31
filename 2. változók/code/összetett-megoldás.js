// ----------------------
// 1. köszöntés
// ----------------------

let name = prompt("Kérlek add meg a neved!");

alert("Helló " + name + "!");

// ----------------------
// 2. plusz egy
// ----------------------

let number1 = Number(prompt("Kérlek írj be egy számot!"));

console.log("Az általad megadott szám eggyel növelt értéke: " + (number1 + 1));

// ----------------------
// 3. hány szelet kenyér kell?
// ----------------------

let vendegek = Number(prompt("Hány vendég jön?"));

let szendvicsFejenkent = Number(prompt("Hány szendvics kell fejenként?"));

console.log(vendegek * szendvicsFejenkent);

// ----------------------
// 4. bmi kalkulátor
// ----------------------

let bodyheight = Number(prompt("Kérlek add meg a testmagasságodat cm-ben!"));

let weight = Number(prompt("Kérlek add meg a testsúlyodat kg-ban!"));

let bmi = weight / ((bodyheight / 100) ^ 2);

console.log("A testtömeg indexed: " + bmi + "kg/m2");

// ----------------------
// 5. mérföld-kilométer konvertáló
// ----------------------

let mile = Number(prompt("Adja meg a sebbeséget mérföld/órában:"));

let km = mile * 1.6;

console.log("Az ön sebessége km/h szerint ennyi: ", km.toFixed(2));

// ----------------------
//  6. celsius-fahrenheit konvertáló
// ----------------------

let fahrenheit = Number(prompt("Adj meg egy hőmérséletet Fahrenheitben!"));
let celsius = ((fahrenheit - 32) * 5) / 9;

console.log(celsius.toFixed(2));

// ----------------------
// 7. változók cseréje
// ----------------------

let a = prompt("Adj meg egy a változót");
let b = prompt("Adj meg egy b változót");

let csere = a;
a = b;
b = csere;

console.log("a=", a, "és b=", b);

// ----------------------
// 8. átutalás
// ----------------------

let aliceSzamla = Number(prompt("Mennyi pénz van Alice számlján?"));
let bobSzamla = Number(prompt("Mennyi pénz van Bob számlján?"));
let utalas = Number(prompt("Mennyit utaljon Alice Bobnak?"));

aliceSzamla = aliceSzamla - utalas;
bobSzamla = bobSzamla + utalas;

console.log("Alice számlája: ", aliceSzamla, "Bob");
