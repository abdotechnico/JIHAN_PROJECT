export class person{
    firstName:string;
    lastName:string;
    age:number;

    /**
     *
     */
    constructor(firstName:string,lastName:string,age:number) {
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }

    logging(){
        console.log("my name is : ",this.firstName," ",this.lastName,", and i have ",this.age," years old.");
    }
    
    
}

