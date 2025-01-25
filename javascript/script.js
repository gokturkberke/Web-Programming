alert("Siteye Hosgeldiniz");
// console.log("Siteye Hosgeldiniz"); console.log() fonksiyonu sadece tarayıcı konsolunda çalışır.
// ve konsol da ciktilar gozukur
console.log(1234);
console.error("Bu bir hata mesajidir");
console.warn("Bu bir uyarı mesajidir");
console.clear(); // console temizler
// ------------------------------------------
// Değişkenler
var password;
console.log(password) // undefined(deger atamadik)

password = "berkekorkut";
console.log(password);

yas = 21;
console.log(yas);

// Değişken tanımlama kuralları
// 1- Sayısal ifade ile başlayamaz
// 2- Degisken isimlerinde komut isimleri kullanılamaz(if, else, var, console)
// 3- Türkçe karakter kullanılmaz , bosluk kullanılmaz (alt cizgi kullanilabilir) adSoyad camelCase
var adSoyad = "Berke Korkut";
console.log(adSoyad);

const email = "1234@gmail.com";
console.log(email);
// const ile tanımlanan değişkenlerin değeri değiştirilemez
// ------------------------------------------
// Veri Tipleri
// Primitive Types
// 1-String
let firstName = "Berke";
console.log(typeof firstName); // string

// 2-Number
let age = 21;
console.log(typeof age); // number

// 3-Boolean
let credi_used = false;
console.log(typeof credi_used); // boolean

// 4-Undefined
let phone;
console.log(typeof phone); // undefined

// Reference Types : Objects
// 1-Array
let liste = ["Asli", "Berke", "Kerem"];
console.log(typeof liste); // object

// 2-Object literals
let adress = {
    city: "Istanbul",
    country: "Turkey"
}
console.log(typeof adress); // object

var hesapla = function () {
    return 0;
}
console.log(typeof hesapla); // function
// ------------------------------------------
//Operatörler
let veri;
const a = 20;
const b = 10;
const c = 5;
let d = 3;

// Aritmetik Operatörler

veri = a + b; // veri = a - b; veri = a * b; veri = a / b;
console.log(veri); // 30
console.log(typeof veri); // number
veri = d++; // ilk olarak 3 yazdirir sonra 1 arttirir
console.log(veri) //3
veri = ++d; // (4+1) ilk olarak 1 arttirir sonra yazdirir
console.log(veri) //5
veri = a % b; // mod alma kalani bulma

// Atama Operatörleri
veri = a;
veri += a; // veri = veri + a; / veri /= a;
veri -= a; // veri = veri - a; / veri *= a;
veri %= a; // veri = veri % a; kalan bulunur(sayi cift mi tek mi bulunur cogu zmn)

// Karşılaştırma Operatörleri
veri = a == b; // false
veri = 5 === 5; // true
veri = 5 === "5"; // false 3 esittir hem sayi hem de turlerine bakar
veri = a != b; // true != esit degil

// Mantıksal Operatörler
// && (and) , || (or) , ! (not)
veri = (a > b) && (a > c); // true
veri = (a > b) && (a < c); // false
veri = (a > b) || (a < c); // true (herhangi biri dogruysa true)
veri = !(a > b); // false ; (a > b) true oldugu icin ! ile false yapar
//------------------------------------------------------
//DATE OBJECT
let zaman = new Date();
console.log(zaman); //2025--01-25 10:20:30
console.log(typeof zaman); // object

//get methods
console.log(zaman.getMonth()); // 01
console.log(zaman.getDate()); // 25
console.log(zaman.getDay()); // 5 (cuma haftanin 5. gunu)
console.log(zaman.getHours()); // 10
console.log(zaman.getMinutes()); // 20
console.log(zaman.getSeconds()); // 30
console.log(zaman.getFullYear()); // 2025

//set methods
zaman.setDate(25);
zaman.setMonth(3);
zaman.setFullYear(2023);
//bu sekil de istedigimiz sekilde degistirebiliriz
console.log(zaman);

let birthday = new Date("9-03-2003 23:15:00");
console.log(zaman.getFullYear() - birthday.getFullYear());
// 2023 - 2003 = 20
//------------------------------------------------------
// Numbers
let variablee;
variablee = Number("5"); // stringi number a cevirir
variablee = parseInt("5"); // stringi integer a cevirir
variablee = parseFloat("5.5"); // stringi float a cevirir

variablee = parseInt("5c"); //5 doner deger olarak c gormezden gelir
variablee = parseInt("c5"); // NaN (not a number) doner
variablee = isNaN("c5"); // true
variablee = isNaN("5"); // false

var sayi = 15.343534224;
variablee = sayi.toPrecision(5); // 15.343 butun sayiyi baz alir
variablee = sayi.toFixed(6); // 15.343534 virgulden sonra 6 basamak alir

veri = Math.PI; // pi sayisi
veri = Math.round(3.5) // 4 (3.4 -> 3)
veri = Math.ceil(3.2); // 4 (yukari yuvarlar her durumda)
veri = Math.floor(3.9); // 3 (asagi yuvarlar her durumda)

veri = Math.pow(2, 4); // 16 (2^4)
veri = Math.sqrt(64); // 8 (karekok)
veri = Math.abs(-10); // 10 (mutlak deger)
veri = Math.min(1, 3, 4, 5, 6, 9)
veri = Math.max(1, 3, 4, 5, 6, 9)
veri = Math.random(); // 0-1 arasinda random sayi uretir
veri = Math.random() * 20; // 0-20 arasinda random sayi uretir
veri = Math.floor(Math.random() * 20); // 0-20 arasinda random tam sayi uretir
//------------------------------------------------------
//String Methods
const firstNamee = "Berke";
const lastNamee = "Korkut";
const agee = 21;
let hobbies = "basketbol,futbol,yuzme,yazilim,gym,dizi,film"

let val;
//Concatenation
val = firstNamee + " " + lastNamee; // Berke Korkut
val = "Berke";
val += " Korkut"; // Berke Korkut

val = 'Benim adim ' + firstNamee + '' + lastNamee + 'yasim ' + agee + ' ve Istanbul\'da yasiyorum.';
// Benim adim Berke Korkut yasim 21 ve Istanbul'da yasiyorum.

val = firstNamee.concat(" ", lastNamee); // Berke Korkut (bu da birlestirir)
val = val.toUpperCase(); // buyuk harf hepsi
val = val.toLowerCase(); // kucuk harf hepsi

//val = val.substring(3,7); // ke Ko (3. indexten 7. indexe kadar)
//val = val.slice(1,8); // erke Ko (1. indexten 8. indexe kadar)
//val = val.slice(-3); // kut (sondan 3. indexe kadar)
//negatif indeksler substringde calismaz

val = val.indexOf("k"); // 5 (ilk K harfinin indexi)
val = val.indexOf("a"); // -1 (bulamazsa -1 doner)

val = val.replace("Korkut", "Korkutt"); // Berke Korkutt
console.log(val); //Berke Korkutt
val.length; // 12

val = hobbies.split(","); // array doner
//------------------------------------------------------
//Arrays
let names = ["Berke", "Kerem", "Asli", "Mert", "Arda"];
let years = [1999, 2000, 2001, 2002, 2003];
let mix = ["Berke " , "Korkut" , 2003 , null , undefined , ["muzik", "kitap"]];


console.log(typeof names); // object
