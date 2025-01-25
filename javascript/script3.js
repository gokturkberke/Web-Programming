// do while loop

let i = 0;

while (i <10) {
    console.log(i);
    i++; 
}

let j = 0;
while ( j< 10) {
    console.log(j);
    if(j==6){
        break
    }
    j++;
} // 0 1 2 3 4 5 6
//--------------------------------
let k = 0;

while(k<10) {
    if(k==3) {
        continue;
    }
    console.log(k);
    k++;
} // 0 1 2 

// do while loop
let l = 15;
do {
    console.log(l);
    l++;
}while(l<10); // 15
//do while ozelligi en az bir kere kosul saglanmasa bile calistirir ve sonra kosula bakar

// for loop
for (let i=0; i<10; i++) {
    console.log(i);
}

for(let i=0; i<10; i++) {
    if(i==3) {
        console.log("Secilen rakam : " + i);
        continue;
    }
}

let toplam = 0;

for (let i =1 ; i<=10; i++) {
    toplam +=i;
}
console.log("Toplam :" + toplam);

let sonuc = 1;

for(let i =1 ; i<=10; i++) {
    sonuc *= i;
}