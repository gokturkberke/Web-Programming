const form = document.getElementById("car-form");
const titleElement = document.querySelector("#title");
const priceElement = document.querySelector("#price");
const urlElement = document.querySelector("#url");

//UI Objesini Baslatma

const ui = new UI();

//Tum elementleri yukleme
eventListeners();

function eventListeners() {
    form.addEventListener("submit", addCar); //submit eventi oldugunda addCar fonksiyonunu cagir
}


function addCar(e) {
    const title = titleElement.value;
    const price = priceElement.value;
    const url = urlElement.value;

    if (title === "" || price === "" || url === "") {
        //Hata
        ui.displayMessages("Tum alanlari doldurun...","danger");
    }
    else {
        //Yeni arac
        const newCar = new Car(title, price, url);

        ui.addCarToUI(newCar); //Araci listeye ekleme
        ui.displayMessages("Arac basariyla eklendi...","success");
    }
    ui.clearInputs(titleElement, priceElement, urlElement);

    e.preventDefault(); //Sayfa yenilenmesin
}