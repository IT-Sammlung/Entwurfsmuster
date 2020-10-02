function fun1(callback) {
  console.log("Vor Callback");
  callback();
  console.log("Nach Callback");
}
function fun2() {
  console.log("Das ist der Callback");
}

fun1(fun2);
