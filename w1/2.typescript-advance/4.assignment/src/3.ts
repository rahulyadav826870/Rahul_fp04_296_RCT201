// Create an interface Address
// it takes
// houseNumber
// street
// city
// state
// postalCode
// country
// add appropriate types

type Person={
name:string
}

interface Address{
    houseNumber:string,
    street:string,
    city:string,
    postalCode:number,
    country:string,
    type:Person,
}



let homeDetail:Address ={
    houseNumber:"RahulHome",
    street:"talav",
    city:"Mumbai",
    postalCode:4012,
    country:"india",
    type:{name:"Yadav"},
}