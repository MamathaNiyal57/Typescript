"use strict";
/* 1.Create a function to update few properties from Student object, it shouldn’t allow all properties, restrict type to allow to
 accept name and email (and don’t hard code name and email, it should be derived from Student type)
2. Create a type which takes input type and returns Yes if passed type is string otherwise No
3. Create an employee lead relationship with example.
4. Write a function to iterate through employees and print {Employee.name} is Lead ,
if they are they are lead otherwise {Employee.name} is not lead*/
Object.defineProperty(exports, "__esModule", { value: true });
var changeValue = {
    name: "Mamatha_Niyal",
    // email: "mamathaniyal@gmail.com",
    age: 22,
    /*address: {
        city: "Hyderabad",
        state: "Telanagana",
        pin: 56000
    }*/
};
var student1 = {
    name: "Mamatha",
    age: 21,
    email: "mamatha@gmail.com",
    address: {
        city: "Banglore",
        state: "Karnataka",
        pin: 560001
    }
};
function updateProp(student1, changeValue) {
    for (var key in changeValue) {
        student1[key] = changeValue[key];
    }
    console.log(student1);
}
updateProp(student1, changeValue);
function checkIfString(input) {
    return (typeof input === 'string' ? "Yes" : "No");
}
console.log(checkIfString("hello"));
console.log(checkIfString(123));
var topLead = {
    id: 1,
    name: "Mamatha"
};
var Lead = {
    id: 2,
    name: "Usha",
    lead: topLead
};
var newEmployee = {
    id: 3,
    name: "Nikki",
    lead: Lead
};
console.log(newEmployee);
var employee1 = { id: 1, name: "Mamatha", position: "Developer" };
var employee2 = { id: 2, name: "Usha", position: "Designer" };
var employee3 = { id: 3, name: "Nikki", position: "Tester" };
var lead = {
    id: 4,
    name: "Sreeja",
    position: "Team Lead",
    manages: [employee1, employee2, employee3]
};
function printLeadStatus(employee) {
    if ('manages' in employee) {
        console.log("".concat(employee.name, " is a Lead and manages:"));
        employee.manages.forEach(function (emp) {
            console.log(" - ".concat(emp.name, ", ").concat(emp.position));
        });
    }
    else {
        console.log("".concat(employee.name, " is not a Lead"));
    }
}
printLeadStatus(employee1);
printLeadStatus(lead);
