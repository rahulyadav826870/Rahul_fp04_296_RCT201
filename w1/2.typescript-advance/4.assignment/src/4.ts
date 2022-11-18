// Create a PersonDetails interface
// it should have
// Prefix optional
// phones array of numbers
// addresses array of Addresses
// email optional
// firstname
// lastname
// middlename optional

 export interface PersonDetails {
    prefix?(name:string):void;
    phones:number[];
    addresses:string[],
    email:string;
    firstname:string,
    lastname:string;
    middlename?:string
}

let c :PersonDetails={
    phones:[1,2,3,4],
    addresses:["talav","Mumbai","maharashtra"],
    email:"rahulyadav8268",
    firstname:"Rahul",
    lastname:"yadav",
    middlename:"umaprasad"
}