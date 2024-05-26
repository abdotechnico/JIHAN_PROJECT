"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.person = void 0;
var person = /** @class */ (function () {
    /**
     *
     */
    function person(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    person.prototype.logging = function () {
        console.log("my name is : ", this.firstName, " ", this.lastName, ", and i have ", this.age, " years old.");
    };
    return person;
}());
exports.person = person;
