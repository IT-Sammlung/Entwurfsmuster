// alle Funktionen werden privat gemacht und im Rückgabeobjekt referenziert
// Revealing-Module-Entwurfsmuster
const Modul = (() => {
  let _zahl = 12;
  function log() {      // <-- private Methode
    console.log(_zahl);
  }
  function doubleLog() {
    log();            // <-- Aufruf anderer Funktion in Modul
    log();
  }
  return {
    log: log,                 // <-- öffentliche Referenz auf private Methode
    doubleLog: doubleLog
  }
})();
Modul.log();
Modul.doubleLog();
