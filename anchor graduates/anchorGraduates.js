/*
Algoritma
INPUT nama dengan string
INPUT nilai dengan angka
INPUT absen dengan angka
HITUNG "Keliling Lingkaran" sama dengan
2 kali pi kali jari-jari lingkaran
Tampilkan hasil Keliling Lingkaran
SELESAI

INPUT "nama" with any string
INPUT "nilai" with any number
INPUT "absen" with any number 

READ "nama", "nilai", "absen"
    IF nilai > 70 AND absen < 5 
      DISPLAY nama: "siswa" nilai: "nilai" Lulus
      else
      DISPLAY nama: "siswa" nilai: "nilai" Tidak Lulus
      ENDIF
END
*/ 

let nama = "joaquin";
let nilai = 100;
let absen = 4;

if (nilai > 70 && absen < 5) {
  console.log(`${nama} Lulus`)
} else {
  console.log(`${nama} Tidak Lulus`)
}

