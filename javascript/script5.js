// let veri;

// veri = window.document.head;
// veri = window.document.body; // body elementini verir sitenin 
//script, URL ,domain , images ... gibi bir cok elementlere erisebiliriz javascript uzerinden
//-------------------------------------
//Tek element secimi
//document.getElementById()

let veri;

veri = document.getElementById("header");
veri = document.getElementById("header").id; // id degerini verir
veri = document.getElementById("header").className; // class degerini verir
veri = document.getElementById("header");

//veri = veri.id; //seklnide kisa bir sekilde  de id cagrrabiliriz cunku veriyi esitledik 
//veri = veri.className;

veri.style.color = "blue"; //style ozelligini degistirebiliriz
veri.style.fontSize = "50px";
veri.style.fontWeight = "bold";

document.getElementById("header").innerText = "Yapilacaklar Listesi"; //icerik degistirme

document.getElementById("header").innerHTML = "<b> ToDo List </b>"; //html kodu yazarak basligi bold yaptik


console.log(veri);

//-------------------------------------
//Document.querySelector() metodu

console.log(document.querySelector("#header"));
console.log(document.querySelector(".card-header")); //sadece classi card-header olan divimizi gosterdi
console.log(document.querySelector("div")); //ilk divi gosterir

document.querySelector("li").style.color = "red"; //ilk
document.querySelector("li:last-child").style.color = "blue"; //son
document.querySelector("li:nth-child(2)").style.color = "yellow"; //2. li elementi

document.querySelector("li").className = "list-group-item list-group-item-primary"; //ilk li elementinin classi degistirdik(bootstrap ozelligi)

document.querySelector("li").classList.add("active"); //ilk li elementine active classi ekledik

//-------------------------------------
//Coklu element secimi
//documemnt.getElementByClassName()
let veri;

veri = document.getElementsByClassName("list-group-item");

//veri = document.getElementsByClassName("list-group-item")[0]; //ilk elemani alir

//veri = veri[2]; //3. elemani alir kisa yoldan cagirdik

veri[1].style.fontSize = "30px";
veri[1].style.color = "red";
veri[2].textContent = "new Text"; //3. elemanin textini degistirdik

for (let i = 0; i < veri.length; i++) {
    console.log(veri[i].stykle.color = "orange");
    console.log(veri[i].textContent = "new text");
} //for dongusu ile tum elemanlara eristik ve hepsinin ozelligini degistrdik

//document.getElementsByTagNam()

veri = document.getElementsByTagName("li");
veri = document.getElementsByTagName("a");

veri = document.getElementById("task-list").getElementsByTagName("a"); //task-list id li elementin icindeki a elementlerini aldik

//document.querySelectorAll()

veri = document.querySelectorAll("li");
veri.forEach(function (item, index) {
    item.textContent = `${index} -item`;
});

console.log(veri)
