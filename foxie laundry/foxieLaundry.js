/*
Algoritma
INPUT "Jumlah Baju Masuk" Dengan angka 0
INPUT "Jumlah Baju Tersedia" dengan angka 20

cek jumlah baju masuk
    3a jika JBM < JBT lanjut step 3b
    3b JB + 1 Repeat
    3c Jika TP = Kp lanjut step 4
4. Jika JBM = JBT , lampu menyala
5. Selesai 

Pseudocode
STORE 'amount clothes' to 0
STORE 'washer capacity' = 20
REPEAT
    READ 'amount clothes'
    IF 'amount clothes' < 'washer capacity'
        INCREMENT 'amount clothes'
    ENDIF
UNTIL 'amount clothes' = 'washer capacity'
IF 'amount clothes' = 'washer capacity' THEN
    DISPLAY Power Light On
END
*/ 
let JBM = 0;
let JBT = 20;

for(let i = 1 ; i <=JBT ; i++){
    if( JBM < JBT ){
        JBM += 1;
    }
}

con