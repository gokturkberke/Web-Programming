
// Tarayıcı Depolama Alanları


// Session Storage

const add = document.querySelector("#add");
const del = document.querySelector("#delete");
const clear = document.querySelector("#clear");


const addkey = document.querySelector("#addkey");
const addvalue = document.querySelector("#addvalue");
const deletekey = document.querySelector("#deletekey");

add.addEventListener("click", addItem);
del.addEventListener("click", deleteItem);
clear.addEventListener("click", clearItem);


function addItem(e) {
    sessionStorage.setItem(addkey.value , addvalue.value);
}

function deleteItem(e) {
    sessionStorage.removeItem(deletekey.value); //bir degerin silinmesi icin nonun anahtar degerini silmek yeterli
}

function clearItem(e) {
    sessionStorage.clear(); //tum degerleri siler
}


// Local Storage
//SetItem
localStorage.setItem("programlama","javascript"); //anahtar olarak programlama deger olarak javascript
localStorage.setItem("kurs","udemy");
localStorage.setItem("bilgisayar",7000); //7000 str olarak gozukur int girmis olsak da

//GetItem
const value = localStorage.getItem("programlama");
console.log(value); //javascript

localStorage.getItem("klavye") //null doner (deger aramak icin kullaniriz)
if (localStorage.getItem("klavye")=== null) {
    console.log("Sorgulanan veri bulunamadi");
}else{
    console.log("Sorgulanan veri bulundu");
}



//Clear Local Storage
localStorage.clear(); //tum degerleri siler

