## If
```js
let a = true;
if(a){
    // a () között van az if "feltétele" 
    // amit ide írok csak akkor fut le ha a feltétel igaz
    // ami a {} között van az az if "belseje"
    // ebben a példában az itt lévő kódok lefutnak
}
if(false){
    // ebben a példában az itt lévő kódok nem futnak le
}
```
```js
let first; // true vagy false
let second; // true vagy false

// ez mindig lefut
if(first){
    // ez akkor fut le ha a "first" igaz
    if(second){
        // ez akkor fut le ha a "first" és a "second" is igaz
        //  a belső if-be lépésnek a feltétele hogy a külsőbe is belépjen
    }
    // ez akkor fut le ha a "first" igaz
}
// ez mindig lefut

if(first && second){
    // ez akkor fut le ha a "first" és a "second" is igaz
}

if(first || second){
    // ez akkor fut le ha a "first" vagy a "second" igaz
}
```
## else
Ha egy `if` elágazásnak van `else` réssze akkor valamelyik ágba mindenképpen belép
```js
let first = true;
let second = false;
// ez mindig lefut
if(first){
    // ez akkor fut le ha a "first" igaz
}else{
    // ez akkor fut le ha a "first" nem igaz
}
```
```js
let number = 11;
if(number % 2 == 0){
    console.log("a szám páros");
}else{
    console.log("a szám páratlan");
}
```

## else if
Ha egy `if` elágazásnak van `else if` réssze akkor az `else if` ágba akkor lép be ha az előtte lévő feltételek hamisak de az `else if` feltétele igaz
```js
let number = 11;
if(number % 2 == 0){
    console.log("a szám páros");
}else if (number % 2 == 1){
    console.log("a szám páratlan");
}else{
    console.log("ez nem egész szám");
}
```
Mindig csak egy ágba tudunk belépni
```js
if(true){
    // ez egy ág
    // ebben az esetben ez lefut
}else if (true){
    // ez egy másik ág
    // ebben az esetben ez NEM fut le
}else if(true){
    // ez egy másik ág
    // ebben az esetben ez NEM fut le
}
else{
    // ez egy másik ág
    // ebben az esetben ez NEM fut le
}
```
Természetesen írhatunk `else` ág nélküli de `elsi if` ággal rendelkező `if` elágazást
```js
let number = "virág";
if(number % 2 == 0){
    console.log("a szám páros");
}else if (number % 2 == 1){
    console.log("a szám páratlan");
}
```
