
function Storage() {
    Storage.prototype.addCarToStorage = function (newCar) {
        let cars = this.getCarsFromStorage();
        cars.push(newCar);
        localStorage.setItem("cars",JSON.stringify(cars));
    }



    Storage.prototype.getCarsFromStorage = function () {

        let cars;

        if (localStorage.getItem("cars") === null) {
            cars = [];
        }
        else {
            cars = JSON.parse(localStorage.getItem("cars"));
        }
        return cars;
    }
}

Storage.prototype.deleteCarFromStroage = function (title) {
    let cars = this.getCarsFromStorage(); //Storage'dan araclari aliyoruz


    cars.forEach(function(car,index){
        cars.splice(index,1); //Arrayden 1 tane degeri sil
        localStorage.setItem("cars",JSON.stringify(cars)); //Array'i tekrar storage'a yaz
    });
}

Storage.prototype.clearAllCarsFromStorage = function(){
    localStorage.removeItem("cars"); //Storage'dan cars key'ini sil
}