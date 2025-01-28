//Event Listener and Event Object

const btn = document.querySelector("#btnDeleteAll");
const btn2 = document.querySelector("#btnAddNewTask");

// btn.addEventListener("click", function (e) {
//     console.log("button clicked");
// })

// btn.addEventListener("click", btnClick); //daha profesyonel yukardakine gore
// btn2.addEventListener("click", btnClick);

// function btnClick() {
//     console.log("button clicked");
// };

btn.addEventListener("click", function (a) {

    let value;

    value = a;
    value = a.target; //eventin nerede oldugunu gosterir hangi butona tiklandigini gosterir
    value = a.target.id; //btnDeleteAll gosterir
    value = a.target.classList; //butonun classlarini gosterir
    value = a.type; //click gosterir

    a.preventDefault(); //sayfanın yenilenmesini engeller yani her tikladigimizda refresh atiyodu sayfaya yukari cikiyo artik yapmayacak
    console.log(value);
});
//------------------------------------------------------------
//Mouse Eventleri

const btn3 = document.querySelector("#btnAddNewTask");
const ul = document.querySelector("#task-list");

//click event

// btn.addEventListener("click", run);
// ul.addEventListener("click", run);

// //dbl click event
// btn.addEventListener("dblclick", run); //cift click de calisir

//Mousedown event
btn.addEventListener("mousedown", run); //mouse birakilana kadar calisir click tusuna

btn.addEventListener("mouseup", run); //mouse clickten cektiginde calisir(basili tutup cektiginde cekilme aninda calsiir)

btn.addEventListener("mouseenter", run); //mouse butonun uzerine gelince calisir
btn.addEventListener("mouseleave", run); //mouse butonun uzerinden cikinca calisir

//mouse over ve mouse out
ul.addEventListener("mouseover", run); //bu da uzerine gelince calisir fakat alt elemanlarinda da yani task listeki carpi isaretinde de calisir(digerinde sadece cikinca leavede calisiyo)
ul.addEventListener("mouseout", run);

//mouse move
ul.addEventListener("mousemove", run); //mouse hareket ederken kordinat / artis miktarini gosterir


function run(event) {
    console.log(`event type: ${event.type}`);
}
// Keyboard EVENT

const text = document.getElementById("txtTaskName");

//focus
text.addEventListener("focus", runn); //input alanina tiklandiginda odaklandigina tetiklenir

//blur
text.addEventListener("blur", runn); //input alanindan cikinca tetiklenir

//paste
text.addEventListener("paste", runn); //input alanina yapistirildiginda herhangi bir sey tetiklenir

//copy
text.addEventListener("copy", runn); //input alanindan kopyalandiginda tetiklenir

//cut
text.addEventListener("cut", runn); //input alanindan kesildiginde tetiklenir

//select
text.addEventListener("select", runn); //input alaninda birsey secilirken mouse birakildiginda tetiklenir

//keydown
text.addEventListener("keydown", runn); //bir tus basildiginda tetiklenir

//keyup
text.addEventListener("keyup", runn); //bir tus birakildiginda tetiklenir



function runn(e) {
    console.log(e.type);
    console.log(e.target.value); //basilan karakteri yazdiricak klavyeden
}
//------------------------------------------------------------
//Event Bubbling(icten disa tetiklenme)

const form = document.querySelector("form");
const cardBody = document.querySelector(".card-body");
const card = document.querySelector(".card");
const container = document.querySelector(".container");

// form.addEventListener("click", function (e) {
//     console.log("form");
//     e.stopPropagation(); //bubblingi durdurur 
// });

// cardBody.addEventListener("click", function (e) {
//     console.log("cardBody");
//     e.stopPropagation();
// });

// card.addEventListener("click", function (e) {
//     console.log("card");
//     e.stopPropagation();
// });

// container.addEventListener("click", function (e) {
//     console.log("container");
//     e.stopPropagation();
// });

//input alanina tikaldigimizda form cardbody card container hepsini tetikler ve yazdirir (form ve onun parentlari)
//bu yuzden function icine e gonderip e.stopPropagation(); ekleyerek sadece istedigimizi yazdirir


//EVENT CAPTURING (distan ice tetiklenme) (stoppropagation uyumlu degil capturng icin)

form.addEventListener("click", function (e) {
    console.log("form");
    
},true);

cardBody.addEventListener("click", function (e) {
    console.log("cardBody");
    
},true);

card.addEventListener("click", function (e) {
    console.log("card");
    
},true);

container.addEventListener("click", function (e) {
    console.log("container");
    
},true);
//------------------------------------------------------------
const deleteItems = document.querySelectorAll(".fa-times");

deleteItems.forEach(function(item){
    item.addEventListener("click",function(e){
        console.log(e.target);
    })
});

const ul2 = document.querySelector("ul");

ul2.addEventListener("click",function(e){
    if(e.target.className === "fas fa-times"){
        e.target.parentElement.parentElement.remove();
        e.preventDefault(); //sayfanin yenilenmesini engeller
    }
});
