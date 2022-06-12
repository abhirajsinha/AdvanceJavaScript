let person1 = {
    name:'Aman',
    age: 25,

    showDetails : function(){
        console.log(this.name + " is " + this.age+" years old");
    }
}

let person2 = {
    name:'Steve',
    age:20
}

person1.showDetails();

//call the showDetails func using person2 
person1.showDetails.call(person2);