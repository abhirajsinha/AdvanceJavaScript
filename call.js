// let person1 = {
//     name:'Aman',
//     age: 25,

//     showDetails : function(){
//         console.log(this.name + " is " + this.age+" years old");
//     }
// }

// let person2 = {
//     name:'Steve',
//     age:20
// }

// person1.showDetails();

// //call the showDetails func using person2 [function bowrrowing]
// person1.showDetails.call(person2);



/`````````````/

// let person1 = {
//     name:'Aman',
//     age: 25,
// }

// let person2 = {
//     name:'Steve',
//     age:20
// }

// let showDetails = function(){
//         console.log(this.name + " is " + this.age+" years old");
// }

// showDetails.call(person1);
// showDetails.call(person2);




/// Pass Arguments

// let person1 = {
//     name:'Aman',
//     age: 25,
// }

// let person2 = {
//     name:'Steve',
//     age:20
// }

// let showDetails = function(city, car){
//     console.log(`${this.name} is ${this.age} years old, he lives in ${city} and he drives ${car}`);
// }

// showDetails.call(person2, "Hyderabad", "Mercedes");






/*

`Apply Function` ; `Everything is same as call func the only diff is
we pass arguments in the apply func in a Array`

*/


// let person1 = {
//     name:'Aman',
//     age: 25,
// }

// let person2 = {
//     name:'Steve',
//     age:20
// }

// let showDetails = function(city, car){
//     console.log(`${this.name} is ${this.age} years old, he lives in ${city} and he drives ${car}`);
// }

// showDetails.apply(person2, ["Hyderabad", "Mercedes"]);


/*
`Bind Function` : `Make a copy of the function and stores it
                    It will not call the function immideatily 
`
*/

let person1 = {
    name:'Aman',
    age: 25,
}

let person2 = {
    name:'Steve',
    age:20
}

let showDetails = function(city, car){
    console.log(`${this.name} is ${this.age} years old, he lives in ${city} and he drives ${car}`);
}

let showDetailsBind = showDetails.bind(person2, "Hyderabad", "Mercedes");
console.log("Bounded Fucnion: ", showDetailsBind);
showDetailsBind();