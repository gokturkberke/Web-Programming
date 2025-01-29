//ToDo Eleman ekleme
const form = document.querySelector("form");
const input = document.querySelector("#txtTasknName");
const btnAddNewTask = document.querySelector("#btnAddTask");
const btnDeleteAll = document.querySelector("#btnDeleteAll");
const taskList = document.querySelector("#task-list");
let todos;



//Load items
loadItems();

eventListeners();

function eventListeners() {
    //submit event
    form.addEventListener("submit", addNewItem); //veri alanindan bir sey ekledigimzide gerceklsecek
    //delete an item
    taskList.addEventListener("click", deleteItem); //silme islemi gerceklesecek
    //delete all items
    btnDeleteAll.addEventListener("click", deleteAllItems);

}

function loadItems() {
    todos = getItemsFromLS(); //local storage dan verileri alir
    todos.forEach(function(item){
        createItem(item);
    }) //items dizisindeki her bir elemani createItem fonksiyonuna gonder
}
//Get items from Local Storage
function getItemsFromLS() {
    if(localStorage.getItem("todos")=== null) {
        todos = [];
    }
    else {
        todos = JSON.parse(localStorage.getItem("todos")); //stringi arraya cevirir
    }
    return todos;
}

//set item to Local Storage
function setItemToLS(newToDo) {
    todos = getItemsFromLS();
    todos.push(newToDo); //yeni elemani ekler
    localStorage.setItem("todos",JSON.stringify(todos)); //arrayi stringe cevirir (parse in tersi)
}


function createItem(newToDo) {
    //li olusturma
    const li = document.createElement("li");
    li.className = "list-group-item list-group-item-secondary";
    li.appendChild(document.createTextNode(newToDo)); //text ekler


    // a olusturma
    const a = document.createElement("a");
    a.classList = "delete-item float-right";
    a.setAttribute("href", "#");
    a.innerHTML = "<i class='fas fa-times'></i>"; //i tagi ekler

    li.appendChild(a); //li ye a yi ekler
    taskList.appendChild(li); //li yi taskList e ekler
}

function addNewItem(e) {
    if (input.value === "") {
        alert("You Should Add new item");
        console.log("submit");
    }
    //Create Item
    createItem(input.value); //fonksiyon cagirdik

    //Save to Local Storage
    setItemToLS(input.value);

    input.value = ""; //input alanini temizler

    e.preventDefault(); //sayfa yenilenmesini engeller
}
//Eleman silme

function deleteItem(e) {
    if (e.target.className === "fas fa-times") { //kucuk beyaz silme isareti task listteki
        if (confirm("Are you sure ?")) {
            e.target.parentElement.parentElement.remove(); //silme islemi gerceklestirir
            deleteToDoFromStorage(e.target.parentElement.parentElement.textContent); //local storage dan silme islemi
        }
    }
    e.preventDefault();
}

function deleteToDoFromStorage(deletetodo){
    let todos = getItemsFromLS();

    todos.forEach(function(todo,index){
        if(todo === deletetodo) {
            todos.splice(index,1); //arrayden silme islemi(1 bulundugu noktadan kac tane index silecegini soyler)
        }
    });
    localStorage.setItem("todos",JSON.stringify(todos));
} 




//Tum elemanlari silme
function deleteAllItems(e) {
    if (confirm("Are you sure to delete all items ?")) {
        while(taskList.firstChild){
            taskList.removeChild(taskList.firstChild); //taskList in icindeki ilk cocugu siler her seferinde taa ki ilk cocuk kalmayana kadar
        }
        localStorage.clear(); //local storage temizleme
    }
    //Alternatif yontem
    //taskList.innerHTML = "";  ->taskList in icini bosaltir
}


