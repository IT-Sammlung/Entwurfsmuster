// Selbst überschreibende Funktion
function log1() {
  console.log("1");
  log1 = function log2() {
    console.log("2");
  }
}
const referenz = log1; // <-- Funktionsreferenz
log1(); // 1
log1(); // 2
log1(); // 3
referenz(); // 1  
referenz(); // 1

//Siehe Entwurfsmuster Lazy Instantiation
