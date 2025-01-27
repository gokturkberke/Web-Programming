//Element Olusturma

const li = document.createElement("li");

//add class
li.className = "list-group-item list-group-item-secondary";

//add attribute
li.setAttribute("title", "new item");
li.setAttribute("data-id", "5");
const text = document.createTextNode("new item");
li.appendChild(text);

const a = document.createElement("a"); //a elementimizi ekledik sira href de
a.setAttribute("href", "#");
a.className = "delete-item float-right";
a.innerHTML = "<i class='fas fa-times'></i>";

li.appendChild(a); //a elementimizi li elementimize ekledik

document.querySelector("#task-list").appendChild(li); //li elementimizi ul elementimize ekledik ve sayfada gorunmeye basladi


console.log(li);
//--------------------------------------------------------------------------------
//Element Silme

const taskList = document.querySelector("#task-list");

//taskList.remove(); //task-list id'sine sahip elementi siler
//taskList.childNodes[7].remove(); //task-list id'sine sahip elementin  cocugunu siler(burda indexte karisiklik oluyo 7 son elemana denk geliyo)
taskList.children[3].remove(); //task-list id'sine sahip elementin son cocugunu siler
//taskList.removeChild(taskList.children[3]); //bu da son elemani siler yukardakine alternatif

//Attribute silme
taskList.children[1].removeAttribute("class"); //goruntusunde degisiklik oldu css sildik

for (let i = 0; i < taskList.children.length; i++) {
    taskList.children[i].removeAttribute("class");
} //dongu yardimiyla tum classlari sildik

console.log(taskList);
//--------------------------------------------------------------------------------
//Element Guncelleme
const cardHeader = document.querySelector(".card-header");

const h2 = document.createElement("h2");
h2.setAttribute("class", "card-header");
h2.appendChild(document.createTextNode("My List"));

const parent = document.querySelector(".card");
parent.replaceChild(h2, cardHeader); //cardHeader'i h2 ile degistirdik

//classlarda guncelleme
const taskListt = document.querySelector("#task-list");
let value;
link = taskListt.children[0].children[0]; //a elementine ulastik bir tane children yazsak li elementine erismis oluruz
value = link.classNmae; // delete-item float-right
value = link.classList; //DOMTokenList(2) ["delete-item", "float-right", value: "delete-item float-right"]
//value = link.classList[0]; //delete-item
link.classList.add("new");
link.classList.remove("new");

//Attribute Guncelleme

value = link.getAttribute("href");
value = link.setAttribute("href", "http://www.google.com");

value = link.hasAttribute("href"); //true

console.log(value);