// Kapselung von Daten über IIFE und Closure
// Module Entwurfsmuster
const Modul = (() => {
  let _zahl = 12;
  return {
    log: function() {
      console.log(_zahl);
    },
    insert: function(x) {
      _zahl = x;
    }
  }
})();
Modul.log();
Modul._zahl = 15;
Modul.log();
Modul.insert(5);
Modul.log();





// Module Entwurfsmuster
const Modul = (() => {
  let _zahl = 12;
  return {
    log: function() {
      console.log(_zahl);
    },
    insert: function(x) {
      _zahl = x;
    },
    double: function(x) {
      Modul.insert(x*2); // <-- Aufruf anderer Funktion
    }
  }
})();
Modul.double(5);
Modul.log();
