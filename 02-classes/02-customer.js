var Customer1 = /** @class */ (function () {
    function Customer1(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Customer1.prototype.setFirstName = function (firstName) {
        this.firstName = firstName;
    };
    Customer1.prototype.setLastName = function (lastName) {
        this.lastName = lastName;
    };
    Customer1.prototype.getFirstName = function () {
        return this.firstName;
    };
    Customer1.prototype.getLastName = function () {
        return this.lastName;
    };
    return Customer1;
}());
var newCustomer = new Customer1("Sankalp", "Gaonkar");
console.log(newCustomer.getFirstName());
console.log(newCustomer.getLastName());
newCustomer.setFirstName("Sameer");
newCustomer.setLastName("Gavkar");
console.log(newCustomer.getFirstName());
console.log(newCustomer.getLastName());
