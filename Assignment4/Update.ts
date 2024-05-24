/* 1.Create a function to update few properties from Student object, it shouldn’t allow all properties, restrict type to allow to
 accept name and email (and don’t hard code name and email, it should be derived from Student type)
2. Create a type which takes input type and returns Yes if passed type is string otherwise No
3. Create an employee lead relationship with example.
4. Write a function to iterate through employees and print {Employee.name} is Lead , 
if they are they are lead otherwise {Employee.name} is not lead*/

import { updateLanguageServiceSourceFile } from "typescript";



//1:

type Address = {
    city: string;
    state: string;
    pin: number;
}

type student = {
    name: string;
    age: number;
    email: string;
    address: Address;
}

type change = Pick<student, "age"|"name">;

const changeValue: change = {
    name: "Mamatha_Niyal",
   // email: "mamathaniyal@gmail.com",
    age: 22,
    /*address: {
        city: "Hyderabad",
        state: "Telanagana",
        pin: 56000
    }*/

};


let student1: student = {
    name: "Mamatha",
    age: 21,
    email: "mamatha@gmail.com",
    address: {
        city: "Banglore",
        state: "Karnataka",
        pin: 560001
    }
}



function updateProp(student1: student, changeValue: change): void{
    for(const key in changeValue){
        student1[key] = changeValue[key];
    }
    console.log(student1)
}
updateProp(student1, changeValue);



//2nd Question:

type IsString<T> = T extends string ? "Yes" : "No";

function checkIfString<T>(input: T): IsString<T> {
    return (typeof input === 'string' ? "Yes" : "No") as IsString<T>;
}


console.log(checkIfString("hello")); 
console.log(checkIfString(123));    



//3rd Question:

type Employe = {
    id: number;
    name: string;
    lead?: Employe;
};
const topLead: Employe = {
    id: 1,
    name: "Mamatha"
};
const Lead: Employe= {
    id: 2,
    name: "Usha",
    lead: topLead
};

const newEmployee: Employe = {
    id:3,
    name: "Nikki",
    lead: Lead
};

console.log(newEmployee);


//4th Question:
type Employee = {
    id: number;
    name: string;
    position: string;
};

type Lead = Employee & {
    manages: Employee[];
};

const employee1: Employee = { id: 1, name: "Mamatha", position: "Developer" };
const employee2: Employee = { id: 2, name: "Usha", position: "Designer" };
const employee3: Employee = { id: 3, name: "Nikki", position: "Tester" };

const lead: Lead = {
    id: 4,
    name: "Sreeja",
    position: "Team Lead",
    manages: [employee1, employee2, employee3]
};

function printLeadStatus(employee: Employee | Lead): void {
    if ('manages' in employee) {
        console.log(`${employee.name} is a Lead and manages:`);
        employee.manages.forEach(emp => {
            console.log(` - ${emp.name}, ${emp.position}`);
        });
    } else {
        console.log(`${employee.name} is not a Lead`);
    }
}

printLeadStatus(employee1); 
printLeadStatus(lead);     






