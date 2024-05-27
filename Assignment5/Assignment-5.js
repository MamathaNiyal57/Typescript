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
var student1 = {
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
var person = {
    name: "Mamatha",
    email: "mamathaniyal@gmail.com",
    city: "Banglore"
};
function myFunction(obj) {
    var personDetails = "";
    for (var key in obj) {
        personDetails += "".concat(key, ": ").concat(obj[key], " ");
    }
    return personDetails;
}
console.log(myFunction(person));
var Utils;
(function (Utils) {
    function myFunction(obj) {
        var detailsOfPerson = "";
        function recurse(currentObj) {
            for (var key in currentObj) {
                var value = currentObj[key];
                if (typeof value === 'string') {
                    detailsOfPerson += "".concat(key, ": ").concat(value, ", ");
                }
                else if (typeof value === 'object' && value !== null) {
                    recurse(value);
                }
            }
        }
        recurse(obj);
        return detailsOfPerson;
    }
    Utils.myFunction = myFunction;
})(Utils || (Utils = {}));
var nestedPerson = {
    name: "Mamatha",
    email: "mamathaniyal@gmail.com",
    city: "Banglore",
    address: {
        city: "Hyderabad",
        state: "Telangana"
    }
};
console.log(Utils.myFunction(nestedPerson));
