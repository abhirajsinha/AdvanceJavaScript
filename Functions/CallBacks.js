/* What is a callBack Function ?
        When we pass a function in a function is called a callback function
*/


/* Example of callBack Function */

function x(y){

}

x(function y(){

})


/* Blocking the main thread 

        If JS didn't have the first class functions, we are not able to do Async applications
        Using these setTimeouts functions we can acheive Asynce function 

*/

/* Event Listener 

        Here we are using addEventListener for the Button Click and we counting the count of clicks on the button through clousers

*/

function attachEventListener(){
        let count=0;
        document.getElementById("clickMe").addEventListener("click", function print(){
                console.log("Button Clicked", ++count);
        });
}

/* Garbage Collection & Remove Event Listeners 

        Why it is a good practice to Remove Event Listeners ?

                Becuase event listeners are heavy they need very huge amount of memory, wherever we attach event listeners it forms a closure and uses memory that is of no use
                So remove event listeners when we are not using them


                So, when we have lots of buttons in our page so remove the event listeners to free up the memory so our page can respond fast or optimize our page
*/