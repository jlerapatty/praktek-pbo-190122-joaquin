/*
  PSEUDOCODE
  
*/ 

let nama = "joaquin";
let nilai = 100;

if (nilai =>80 && nilai <= 100 ) {
    console.log(`${nama} Nilai A`)
} else if (nilai =>65 && nilai <= 79) {
    console.log(`${nama} Nilai B`)
} else if (nilai =>50 && nilai <= 64) {
    console.log(`${nama} Nilai C`)
} else if (nilai =>35 && nilai <= 49) {
    console.log(`${nama} Nilai D`)
} else if (nilai =>0 && nilai <= 34) {
    console.log(`${nama} Nilai E`)
} else if (nilai <0 && nilai >100) {
    console.log(`${nama} Nilai Invalid`)
}