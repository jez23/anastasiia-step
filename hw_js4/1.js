"use strict"
function createNewUser() {

    const newUser = {
        firstName: "",
        lastName: "",
        get getLogin() {
            return `${this.firstName[0].toLowerCase()}${this.lastName.toLowerCase()}`
        },
        setNewFirstName(newFirstName) {
            Object.defineProperty(newUser, 'firstName', {
                value: newFirstName
            });
        },
        setNewLastName(newLastName) {
            Object.defineProperty(newUser, 'lastName', {
                value: newLastName
            });
        }
    };

    newUser.setFirstName = function(val) {
    Object.defineProperty(this, 'firstName', {
            value: val
        });                          
        return true;
}

    Object.defineProperty(newUser, 'firstName', {
        value: prompt('enter your name'),
        // value: firstName,
        writable: false,
        configurable: true,
        enumerable: true,
        
    });
    Object.defineProperty(newUser, 'lastName', {
        value: prompt('enter your surname'),
        // value: lastName,
        writable: false,
        configurable: true,
        enumerable: true,
    })
    return newUser;
}


let myUser = createNewUser();
console.log(myUser.getLogin);
// myUser.lastName = "TEST2";
// console.log(myUser);
// myUser.setNewFirstName("TEST1");
// myUser.setNewLastName("TEST2");
// console.log(myUser);

// function createNewUser(name, surname) {
//     const newUser = {
//         firstName: name,
//         lastName: surname,
//         getLogin: function () {
//             return this.firstName[0].toLocaleLowerCase() + this.lastName.toLowerCase()
//         },
//         setFirstName: function (newFirstName) {
//             delete this.firstName;
//             this.firstName = newFirstName;
//         },
//         setLastName: function (newLastName) {
//             delete this.lastName;
//             this.lastName = newLastName;
//         },
//     };

//     Object.defineProperty(newUser, 'firstName', {
//         writable: false
//     });
//     Object.defineProperty(newUser, 'lastName', {
//         writable: false
//     })

//     return newUser;
// }

// const newUser = createNewUser(prompt(`Введіть Ваше ім'я`), prompt(`Введіть Ваше прізвище`));


// console.log(newUser.getLogin());

