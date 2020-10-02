// Einfaches Beispiel einer Callback-Funktion (Rückruffunktion)
function fun1(callback) {
  console.log("Vor Callback");
  callback();
  console.log("Nach Callback");
}
function fun2() {
  console.log("Das ist der Callback");
}

fun1(fun2);


// Asynchrone Funktion die nicht funktioniert, da sie sofort (synchron) einen Wert zurückgibt welcher noch nicht bekannt ist, also undef
function async1() {
  setTimeout(() => {
    let x = 8000;
    console.log(x);
    return x;
  }, 2000);
}
console.log(async1()); //undefined --> nach 2sekunden 8000

// Asynchrone Funktion die funktioniert mit dem Callback-Entwurfsmuster
function async2(callback) {
  setTimeout(() => {
    let x = 4000;
    console.log(x);
    callback(x);
  }, 2000);
}
async2(
  (x) => {
    console.log(x); // 4000 nach 2 Sekunden (2x);
  }
);
