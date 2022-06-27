//Mutable - able to change the code

//immutable:

const person1={
    name:'Aman',
    Age:25
}

// const person2=person1;//Refrence

// person2.name="Abhi";//It will change in both the objects because of refrence
// console.log(person1);
// console.log(person2);

//Output
// { name: 'Abhi', Age: 25 }
// { name: 'Abhi', Age: 25 }


//To get rid of this problem
// const person2 = Object.assign({},person1);
// person2.name='Steve';

// console.log(person1);
// console.log(person2);

//output
// { name: 'Aman', Age: 25 }
// { name: 'Steve', Age: 25 }

//Approach 2
// const person2 = {...person1};
// person2.name='Steve';

// console.log(person1);
// console.log(person2); 

//Output
// { name: 'Aman', Age: 25 }
// { name: 'Steve', Age: 25 }




