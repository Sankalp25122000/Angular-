class Customer3 {

    //using "constructor properties" to declare and initialize class variables
  constructor(private firstName: string, private lastName: string) {}
  public setFirstName(firstName: string) {
    this.firstName = firstName;
  }

  public setLastName(lastName: string) {
    this.lastName = lastName;
  }
  public getFirstName(): string {
    return this.firstName;
  }
  public getLastName(): string {
    return this.lastName;
  }
}

let newCustomer1 = new Customer3("Sankalp", "Gaonkar");

console.log(newCustomer1.getFirstName());
console.log(newCustomer1.getLastName());

newCustomer1.setFirstName("Sameer");
newCustomer1.setLastName("Gavkar");

console.log(newCustomer1.getFirstName());
console.log(newCustomer1.getLastName());
