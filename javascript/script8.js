// let kaan = {
//     name: "Kaan",
//     yearOfBirth: 2004,
//     job: "student"
// }

// val = kaan;
// console.log(val);
// console.log(typeof val); // object



function Student(name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
    //console.log(this);
    this.calculateAge = function () {
        return 2025 - this.yearOfBirth;
    }


}

let kaan = new Student("kaan", 2004, "student");
let berke = new Student("berke", 2003, "student");

console.log(berke.calculateAge()); // 22

console.log(kaan.job);

//------------------------------------------------------------
//PROTOTYPE

let Person = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;

}
let aylin = new Person("aylin", 1986, "teacher");
let aybala = new Person("aybala", 2015, "student");

Person.prototype.calculateAge = function () {
    return 2025 - this.yearOfBirth;
}

Person.prototype.getName = function () {
    return this.name;
}

console.log(aylin.calculateAge()); // 39
console.log(aylin.getName()); // aylin
console.log(aylin);

console.log(aybala.calculateAge()); // 10

//------------------------------------------------------------
//Object.create

let personProto = {
    calculateAge: function () {
        return 2025 - this.yearOfBirth;
    }
}

let ata = Object.create(personProto);

console.log(ata); // {}

ata.name = "ata";
ata.yearOfBirth = 2003;
ata.job = "student";

console.log(ata.calculateAge()); // 22

let gokce = Object.create(personProto, {
    name: { value: "gokce" },
    yearOfBirth: { value: 2004 },
    job: { value: "student" }
});

console.log(gokce); // {name: "gokce", yearOfBirth: 2004, job: "student"}
console.log(gokce.calculateAge()); // 21

//------------------------------------------------------------
//Prototype Tabanli Miras Alma

let Personn = function (name, yearOfBirth, job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Personnn.prototype.calculateAge = function () {
    return 2025 - this.yearOfBirth;
}

let Teacher = function (name, yearOfBirth, job, subject) {
    Personn.call(this, name, yearOfBirth, jo);
    this.subject = subject;
}
//Inherit the person prototype methods
Teacher.prototype = Object.create(Personn.prototype); //prototype tabanli miras aldik

//set teacher constructor
Teacher.prototype.constructor = Teacher;

let ece = new Teacher("ece", 1980, "teacher", "english");

console.log(ece);
console.log(ece.calculateAge()); //error verir prototype miras almazsak
//------------------------------------------------------------
//IMMEDIATE FUNCTIONS

function welcome() {
    var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    var today = new Date();
    var msg = "Welcome. Today is " + days[today.getDay()]
    return msg;
}
console.log(welcome());

// (function(){

// }());
//iki farkli kullanim(immediate function = tek seferlik calisan fonksiyonlar)
(function (name) {
    var days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
    var today = new Date();
    var msg = "Welcome" + name + '  Today is ' + days[today.getDay()];
    console.log(msg);
})("Berke");