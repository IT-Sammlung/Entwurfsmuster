// Funktion überschreibt sich selbst
function log1() {
  console.log("1");
  log1 = function log2() {
    console.log("2");
  }
}
log1(); // 1
log1(); // 2
log1(); // 3
