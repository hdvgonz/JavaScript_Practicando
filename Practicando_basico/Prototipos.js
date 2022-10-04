function Student () {
    this.name = "Jhon";
    this.gender = 'M'
}

Student.prototype.age = 15;

var studObj1 = new Student();
console.log(studObj1.age)

var studObj2 = new Student();
console.log(studObj2.age)