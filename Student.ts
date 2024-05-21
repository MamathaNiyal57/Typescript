

type course = "Java" | "Python" | "Typescript" | "Javascript"
type Address = {
    city: string;
    state: string;
    pin: number;
}

class Student {
    name: string;
    age: number;
    email: string;
    address: Address;
    courseList: course[];


    constructor (name: string, age: number, email: string, address: Address, courseList: course[])
    {
        this.name = name;
        this.age = age;
        this.email = email;
        this.address = address;
        this.courseList = courseList;
    }

    getDetails(){
        console.log(`Name: ${this.name}, Age: ${ this.age }, Email: ${this.email}, Address: ${this.address.city}, ${this.address.state} - ${this.address.pin}, CourseList: ${this.courseList.join(", ")} `);
    }
     
}

const address: Address = {
    city: "Banglore",
    state: "Karnatak",
    pin: 560001
};

const courses: course[] = ["Java" ,"Javascript"];

const student = new Student("Mamatha", 21, "mamatha@gmail.com", address, courses);
student.getDetails();

// 2nd :

import { myFunction } from './generic'

let output1 = myFunction<string>("Hello!");
let output2 = myFunction<number>(5);
let output3 = myFunction<boolean>(true);

console.log(output1);
console.log(output2);
console.log(output3);


//3rd :

interface student {
    name: string;
    age: number;
    email: string;
    address: Address;
    courseList: course[];
}

type createReadonly<T> = {
    readonly[P in keyof T]: T[P];
};

type Readonlystudent = createReadonly<student>;

const stud: Readonlystudent = {
    name: "Mamatha",
    age: 21,
    address:{
        city: "Banglore",
        state:"Karnataka",
        pin: 560001

    },
    email: "mamatha@gmail.com",
    courseList: ["Java", "Python"]
};

//stud.name = "Mammu";  -- this is causing an error
console.log(stud);


/*const studPartial: Partial<student> = {
    name: "Mamatha",
    age: 21
};*/







