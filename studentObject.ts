
type courses = "Java" | "Python" | "Typescript" | "Javascript"
type address = {
    city: string;
    state: string;
    pin: number;
}

interface studentObj {
    name: string;
    age: number;
    addressN: address;
    email: string;
    intrestedCourse: courses[];
}

let studentObject: studentObj = {
    name: "Mamatha",
    age: 21,
    addressN:{
        city: "IndiraNagar",
        state:"Karnataka",
        pin: 505201

    },
    email: "mamathaniyal@gmail.com",
    intrestedCourse: ["Java", "Python"]
};



type student = {
    name: string;
    age: number;
    addressN: address;
    email: string;
    intrestedCourse: courses[];
}

let Student: student ={
    name: "Mamatha",
    age: 21,
    addressN:{
        city: "IndiraNagar",
        state:"Karnataka",
        pin: 505201

    },
    email: "mamathaniyal@gmail.com",
    intrestedCourse: ["Java", "Python"]

};

console.log(Student);
console.log(studentObject);
