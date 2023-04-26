var Customer3 = /** @class */ (function () {
    function Customer3(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Customer3.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Customer3.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    Customer3.prototype.getFirstName = function () {
        return this.firstName;
    };
    Customer3.prototype.getLastName = function () {
        return this.lastName;
    };
    return Customer3;
}());
var newCustomer1 = new Customer3("Sankalp", "Gaonkar");
console.log(newCustomer1.getFirstName());
console.log(newCustomer1.getLastName());
newCustomer1.setFirstName("Sameer");
newCustomer1.setLastName("Gavkar");
console.log(newCustomer1.getFirstName());
console.log(newCustomer1.getLastName());
