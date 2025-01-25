//If and Else
const firstName = "Berke";
const userName = "Revenger";
const age = 21;
const isStudent = true;
const school = "university";

if (userName == "Revenger") {
    console.log("Hello Revenger");
}
else {
    console.log("Kullanici bulunamadi")
}

if (age === 20) {
    console.log("yasiniz : 20")
} //calismaz

if (isStudent) {
    console.log("Ogrencisiniz")
}

let id = 100;
if (typeof id != "undefined") {
    console.log("Id = ", id);
}
else {
    console.log("Id undefined")
}
// Switch Case

let islem = 1;

switch (islem) {
    case 1:
        console.log("1. nolu islem yapildi")
        break;
    case 2:
        console.log("2. nolu islem yapildi")
        break;
    case 3:
        console.log("3. nolu islem yapildi")
        break;

    default:
        console.log("Gecersiz islem")

} //1. nolu islem yapildi
//6 olursa hicbir sey yapilmaz mesela yapmasi icin default eklenir

let day;

switch (new Date().getDay()) {
    case 0:
        day = "Pazar";
        break;
    case 1:
        day = "Pazartesi";
        break;
    case 2:
        day = "Sali";
        break;
    case 3:
        day = "Carsamba";
        break;
    case 4:
        day = "Persembe";
        break;
    case 5:
        day = "Cuma";
        break;
    case 6:
        day = "Cumartesi";
        break;
}
console.log(day);

let hour = 16;
switch (true) {
    case (hour >= 6 && hour < 12):
        console.log("Günaydin");
        break
    case (hour >= 13 && hour <18):
        console.log("Iyi gunler");
        break
    case (hour >= 18 && hour < 24):
        console.log("Iyi aksamlar");
        break
    default:
        console.log("Yanlis zaman")
    
}
// Object Literals

let veri;
let user = {
    userName : "Revenger",
    firstName : "Berke",
    lastName : "Korkut",
    age:21,
    isStudent:true,
    hobbies : ["music","cinema","sport"],
    adress : {
        city : "Istanbul",
        country: "Turkey",
        phone : "123456789"
    }
}
veri = user;
veri = user.firstName; 
veri = user.hobbies;
veri = user.hobbies.length;
veri = user.adress.city;


console.log(veri); 
console.log()





