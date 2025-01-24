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
let liste = ["Asli" , "Berke" , "Kerem"];
console.log(typeof liste); // object

// 2-Object literals
let adress = {
    city : "Istanbul",
    country : "Turkey"
}
console.log(typeof adress); // object

var hesapla = function() {
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
veri = 5 ==="5"; // false 3 esittir hem sayi hem de turlerine bakar
veri = a != b; // true != esit degil

// Mantıksal Operatörler
// && (and) , || (or) , ! (not)
veri = (a > b) && (a > c); // true
veri = (a > b) && (a < c); // false
veri = (a > b) || (a < c); // true (herhangi biri dogruysa true)
veri = !(a > b); // false ; (a > b) true oldugu icin ! ile false yapar


