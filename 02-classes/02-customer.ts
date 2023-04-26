class Customer1{
    firstName:string;
    lastName:string;

    constructor(firstName:string,lastName:string){
        this.firstName=firstName;
        this.lastName=lastName;
    }
    public setFirstName(firstName:string){
        this.firstName=firstName;
    }

    public setLastName(lastName:string){
        this.lastName=lastName;
    }
    public getFirstName():string{
        return this.firstName;
    }
    public getLastName():string{
        return this.lastName;
    }

}



let newCustomer = new Customer1("Sankalp","Gaonkar");

console.log(newCustomer.getFirstName());
console.log(newCustomer.getLastName());

newCustomer.setFirstName("Sameer");
newCustomer.setLastName("Gavkar");

console.log(newCustomer.getFirstName());
console.log(newCustomer.getLastName());

