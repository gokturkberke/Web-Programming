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
let verii;

verii = document.getElementsByClassName("list-group-item");

//veri = document.getElementsByClassName("list-group-item")[0]; //ilk elemani alir

//veri = veri[2]; //3. elemani alir kisa yoldan cagirdik

verii[1].style.fontSize = "30px";
verii[1].style.color = "red";
verii[2].textContent = "new Text"; //3. elemanin textini degistirdik

for (let i = 0; i < verii.length; i++) {
    console.log(verii[i].style.color = "orange");
    console.log(verii[i].textContent = "new text");
} //for dongusu ile tum elemanlara eristik ve hepsinin ozelligini degistrdik

//document.getElementsByTagNam()

verii = document.getElementsByTagName("li");
verii = document.getElementsByTagName("a");

verii = document.getElementById("task-list").getElementsByTagName("a"); //task-list id li elementin icindeki a elementlerini aldik

//document.querySelectorAll()

verii = document.querySelectorAll("li");
verii.forEach(function (item, index) {
    item.textContent = `${index} -item`;
});

console.log(verii)
console.clear();
//-------------------------------------
//Elementler uzerinde gezinme

let value;
const todoList = document.querySelector(".list-group");
const todo = document.querySelector(".list-group-item:nth-child(2)"); // sadece ikinci eleman
const card = document.querySelector(".card");


value = todoList;
value = todo;
value = card;

//Child Nodes
value = todoList.childNodes; //text dahil tum childlari alir
value = todoList.children; //sadece elementleri alir
value = todoList.children[0]; //ilk elemani alir
value = todoList.children[todoList.children.length - 1]; //son elemani alir
value = todoList.children[1].textContent= "degistirilen madde"; //2. elemani degistirdik

value = card;
value = card.children; //card-header card-body
value = card.children[1].children[0].textContent = "merhaba"; //card-body nin ilk cocugunun ilk cocugunun textini degistirdik

value = todoList;
//value = todoList.children[0];
value = todoList.firstChild;  //ustteki veya bu ayni gorevi gorur
value = todoList.lastChild;

value = todoList.children.length; //4
value = todoList.childElementCount; //4 ayni ustteki ile

value = card;
value = card.parentElement; //cardin parentini alir yani container-p3
value = card.parentElement.parentElement; //parentin parenti(body olur)

value = todo;
//nextSibling - nextElementSibling
value = todo.previousElementSibling; //bir onceki elementi alir
value = todo.nextElementSibling; //bir sonraki elementi alir
value = todo.nextElementSibling.nextElementSibling; // 4. elemana ulasir

console.log(value); 
