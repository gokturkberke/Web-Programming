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
let aybala = new Person ("aybala",2015,"student");

Person.prototype.calculateAge = function(){
        return 2025 - this.yearOfBirth;
    }

Person.prototype.getName  = function(){
    return this.name;
}

console.log(aylin.calculateAge()); // 39
console.log(aylin.getName()); // aylin
console.log(aylin);

console.log(aybala.calculateAge()); // 10