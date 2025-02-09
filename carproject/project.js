const form = document.getElementById("car-form");
const titleElement = document.querySelector("#title");
const priceElement = document.querySelector("#price");
const urlElement = document.querySelector("#url");
const cardBody = document.querySelectorAll(".card-body")[1]; //2. card-body
const clear = document.getElementById("clear-cars");

//UI Objesini Baslatma

const ui = new UI();

const storage = new Storage();

//Tum elementleri yukleme
eventListeners();

function eventListeners() {
    form.addEventListener("submit", addCar); //submit eventi oldugunda addCar fonksiyonunu cagir

    document.addEventListener("DOMContentLoaded", function () {
        let cars = storage.getCarsFromStorage();
        ui.loadAllCars(cars)
    });

    cardBody.addEventListener("click", deleteCar);
    clear.addEventListener("click",clearAllCars);

}


function addCar(e) {
    const title = titleElement.value;
    const price = priceElement.value;
    const url = urlElement.value;

    if (title === "" || price === "" || url === "") {
        //Hata
        ui.displayMessages("Tum alanlari doldurun...", "danger");
    }
    else {
        //Yeni arac
        const newCar = new Car(title, price, url);

        ui.addCarToUI(newCar); //Araci listeye ekleme

        storage.addCarToStorage(newCar); //Storage'a araci ekleme

        ui.displayMessages("Arac basariyla eklendi...", "success");
    }
    ui.clearInputs(titleElement, priceElement, urlElement);

    e.preventDefault(); //Sayfa yenilenmesin
}


function deletCar(e) {
    if (e.target.id === "delete-car") {
        ui.deleteCarFromUI(e.target);

        storage.deleteCarFromStroage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent); //Aracin basligini aliyoruz

        ui.displayMessages("Silme islemi basariyla gerceklesti.","success");
    }
}
function clearAllCars(){
    ui.clearAllCarsFromUI();
    storage.clearAllCarsFromStorage();

    if(confirm("Emin misiniz? Tüm araçlar silinecek!")){
        ui.clearAllCarsFromUI();
        storage.clearAllCarsFromStorage();
    }
}