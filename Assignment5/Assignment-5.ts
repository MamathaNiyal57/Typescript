/*Create any type with 5-6 properties each of different type of values and few as optional properties and 
Create another type from it with all properties as required (Without using typescript default Required type)
Write a function to take object as parameter (both keys and values are string) and return concat all keys along with values
Ex Input: {
    name: "User",
    email: "user@gmail.com"
}

Output: "name: User, email: user@gmail.com"
To make above problem more complex (property value can be either string or object of same recursive type with any nested objects)
Ex Input: {
    name: "User",
    email: "user@gmail.com",
    address: {
        city: "Hyderabad",
        state: "Telangana"
    }
}
Output: "name: User, email: user@gmail.com, city: Hyderabad, state: Telangana"
For the above problem use util function with namespace */

//1st question:

type Address = {
    city: string;
    state: string;
    pin: number;
};

type student = {
    name: string;
    id: number;
    address: Address;
    isTopper: boolean;
    fatherName?: string;
    phoneNo?: number;
};

type MakeAllRequired<T> = {
    [P in keyof T]-?: Exclude<T[P], undefined>;
  };
  

type requiredItems = MakeAllRequired<student>;

const student1: requiredItems = {
    name: "Mamatha",
    id: 2217,
    address: {
        city: "Banglore",
        state: "Karnataka",
        pin: 560001
    },
    isTopper: true,
    fatherName: "Srinu",
    phoneNo: 1233456789
};

console.log(student1);


//2nd question:
//2nd and3rd question:

type MyObject = {
    name: string;
    email: string;
    city: string;
};

const person: MyObject = {
    name: "Mamatha",
    email: "mamathaniyal@gmail.com",
    city: "Banglore"
};

function myFunction(obj: { [key: string]: string }): string {
    let personDetails = "";
    for (const key in obj) {
        personDetails += `${key}: ${obj[key]} `;
    }
    return personDetails;
}

console.log(myFunction(person));

namespace Utils {
    export function myFunction(obj: { [key: string]: any }): string {
        let detailsOfPerson = "";

        function recurse(currentObj: { [key: string]: any }) {
            for (const key in currentObj) {
                const value = currentObj[key];
                if (typeof value === 'string') {
                    detailsOfPerson += `${key}: ${value}, `;
                } else if (typeof value === 'object' && value !== null) {
                    recurse(value);
                }
            }
        }

        recurse(obj);
        return detailsOfPerson;
    }
}

const nestedPerson = {
    name: "Mamatha",
    email: "mamathaniyal@gmail.com",
    city: "Banglore",
    address: {
        city: "Hyderabad",
        state: "Telangana"
    }
};

console.log(Utils.myFunction(nestedPerson));




 










