// Lazy Instantiation
// Im Grunde eine Closure
function lazy() {
  const externe_berechnung = 5;       // <-- Dieser Teil wird nur das erste Mal aufgerufen
  console.log("Erster Aufruf");
  lazy = function() {                 // <-- Da hier die Funktion überschrieben wird
    console.log('Nicht der erste Aufruf')
    return externe_berechnung;
  }
  return externe_berechnung;
}
lazy(); // Erster Aufruf
lazy(); // Nicht erster Aufruf
lazy(); // Nicht erster Aufruf
