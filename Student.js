"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Student = /** @class */ (function () {
    function Student(name, age, email, address, courseList) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.address = address;
        this.courseList = courseList;
    }
    Student.prototype.getDetails = function () {
        console.log("Name: ".concat(this.name, ", Age: ").concat(this.age, ", Email: ").concat(this.email, ", Address: ").concat(this.address.city, ", ").concat(this.address.state, " - ").concat(this.address.pin, ", CourseList: ").concat(this.courseList.join(", "), " "));
    };
    return Student;
}());
var address = {
    city: "Banglore",
    state: "Karnatak",
    pin: 560001
};
var courses = ["Java", "Javascript"];
var student = new Student("Mamatha", 21, "mamatha@gmail.com", address, courses);
student.getDetails();
// 2nd :
var generic_1 = require("./generic");
var output1 = (0, generic_1.myFunction)("Hello!");
var output2 = (0, generic_1.myFunction)(5);
var output3 = (0, generic_1.myFunction)(true);
console.log(output1);
console.log(output2);
console.log(output3);
var stud = {
    name: "Mamatha",
    age: 21,
    address: {
        city: "Banglore",
        state: "Karnataka",
        pin: 560001
    },
    email: "mamatha@gmail.com",
    courseList: ["Java", "Python"]
};
//stud.name = "Mammu";  -- this is causing an error
console.log(stud);
var studPartial = {
    name: "Mamatha",
    age: 21
};
