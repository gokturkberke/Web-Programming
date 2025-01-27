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

// for in loop
let citys = ["Ankara", "Istanbul", "Izmir","Antalya","Burdur","Nevsehir"];

let users = [
    {firstName : "Berke", lastName : "Korkut"},
    {firstName : "Mert", lastName : "Yilmaz"},
    {firstName : "Tolga", lastName : "Sahin"},
    {firstName : "Selin", lastName : "Efe"},
]

for(let i=0;i<citys; i++) {
    console.log(citys[i]);
}

//for-in loop
for(let i in citys) {
    console.log(`index:${i} value: ${citys[i]}`) //option ve escnin altindaki tus ile yaptigimzi ters tirnak ile olur bu yaptigimiz
} // index:0 value: Ankara ...

// for each loop

citys.forEach(function(item){
    console.log(item); // Ankara Istanbul Izmir Antalya Burdur Nevsehir
});

for(let i=0; i<users.length;i++) {
    console.log(users[i].lastName);
} // Korkut Yilmaz Sahin Efe

for(let i in users) {
    console.log(`index: ${i} value: ${users[i].lastName} `)
} // index: 0 value: Korkut ...

//map returns an array

let veri = users.map(function(item){
    return item.firstName + "" + item.lastName;
}); //map fonksiyonu her elemani alip bir dizi elemanina donusturdu
console.log(veri); // Berke Korkut Mert Yilmaz Tolga Sahin Selin Efe

let numbers = [1,3,5,9,12];

let num = numbers.map(function(n){
    return n*n;
});
console.log(num); // 1 9 25 81 144