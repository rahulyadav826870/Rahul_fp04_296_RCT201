// Create a function getName
// it should accept an object firstname and lastname
// it should return fullname
// keep lastname optional.
// if lastname does not exist then return only firstname
// make a interface for it
const getName = (FunDetails) => {
    if (FunDetails.lastname === undefined) {
        return FunDetails.firstName;
    }
    return FunDetails.firstName + FunDetails.lastname;
};
