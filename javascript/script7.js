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