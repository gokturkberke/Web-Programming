//Functions

// function merhaba() {
//     console.log("Merhaba");
// }

// merhaba(); //function call

function merhaba(name, age) {
    console.log(`Isim : ${name} Yas : ${age}`);
}
merhaba("Ahmet", 25);

function yasHesapla(dogumyili) {
    return 2025 - dogumyili;
}

let ageBerke = yasHesapla(2003);
console.log(ageBerke);

function ehliyetAlabilmeDurumu(dogumyili, isim) {
    let yas = yasHesapla(dogumyili);
    let ehliyet = 18 - yas;

    if (ehliyet > 0) {
        console.log(` ${isim} ehliyet alabilmenize ${ehliyet} yil kaldi`);

    } else {
        console.log("Ehliyet alabilirsiniz");
    }

}
ehliyetAlabilmeDurumu(2003, "Berke"); //Ehliyet alabilirsiniz
ehliyetAlabilmeDurumu(2010, "Ahmet"); //Ahmet ehliyet alabilmenize 3 yil kaldi
//--------------------------------------------
//Window object
veri = window;

console.log(veri); //methodlari gosterir ve veriyi icine atar bu methodlarin icine

//Alert
alert("Merhaba");


//prompt

var veri2 = prompt("Adinizi giriniz: ");

//Confirm (yes no)

veri3 = confirm("Cikmak istediginizden emin msiniiz ?");
//console.log(veri3); //evet true hayir false doner
if (veri3) {
    console.log("Cikis gerceklesti");
} else {
    console.log("Cikis gerceklesmedi");
}

//Location method
let veri4 = window.location;
console.log(veri4);
veri = window.location.href;
veri = window.location.hostname;
veri = window.location.protocol;

// window.location.href = "http://www.google.com"; google sayfasina yonlendirir
//window.location.reload(); sayfayi yeniler

//window.navigator; //tarayici ozelliklerini gosterir
//window.document; //sayfa ozelliklerini gosterir  bu ikisini console kismina yaz
//--------------------------------------------
//Scope Kavrami

//Global scope

var veri5 = 5;
let veri6 = 10;
const veri7 = 15;

function fonksiyon(){
    var veri5 = 20;
    let veri6 = 25;
    const veri7 = 30;
    console.log(veri5, veri6, veri7);
}
fonksiyon(); //20 25 30

console.log(veri5, veri6, veri7); //5 10 15

//Block scope
if(true) {
    var a = 10;
    let b = 20;
    const c = 30;
}

console.log(a); //10
console.log(b); //b is not defined
console.log(c); //c is not defined
//Bir degiskeni hem block icinde hem block disinda kullanmak istiyorsak var kullanmamaliyiz
if(true) {
    var veri5 = 30;
    let veri6 = 40;
    const veri7 = 50;

    console.log(veri5, veri6, veri7); //30 40 50
}

console.log(veri5, veri6, veri7); //30 10 15
//var ile olusturulan degiskenler block scopeda da ozelligi degisebilir son degerini alabilir
// var karisiklik cikabilecegi icin let ve const kullanilir daha cok
