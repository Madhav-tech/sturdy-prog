// const Address = {
//     street:"ward 13",
//     city:"Bijuliya",
//     zipCode:811106
// };
//Factory function
//let ad = createAddress('a','b','c');
//console.log(ad);
// function createAddress(street,city,zipCode){
//     return{
//         street,
//         city,
//         zipCode
//     };
// }

//Constructor function

function Address(street,city,zipCode){
    this.street =street;
    this.city=city;
    this.zipCode =zipCode;

}
let ad1 = new Address('a','b','c');
let ad2 =new Address('a','b','c');

function areEqual(ad1,ad2){
    return ad1.street===ad2.street && 
    ad1.city===ad2.city && ad1.zipCode===ad2.zipCode;
}
console.log(areEqual(ad1,ad2));