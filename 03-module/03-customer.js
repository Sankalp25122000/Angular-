"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customer4 = void 0;
var Customer4 = /** @class */ (function () {
    //export keyword is used to declare class as public through which everyone can access it
    //using "constructor properties" to declare and initialize class variables
    function Customer4(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Customer4.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Customer4.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    Customer4.prototype.getFirstName = function () {
        return this.firstName;
    };
    Customer4.prototype.getLastName = function () {
        return this.lastName;
    };
    return Customer4;
}());
exports.Customer4 = Customer4;
// let newCustomer1 = new Customer3("Sankalp", "Gaonkar");
// console.log(newCustomer1.getFirstName());
// console.log(newCustomer1.getLastName());
// newCustomer1.setFirstName("Sameer");
// newCustomer1.setLastName("Gavkar");
// console.log(newCustomer1.getFirstName());
// console.log(newCustomer1.getLastName());
