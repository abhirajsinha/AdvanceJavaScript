/* 

 All JS Code executes inside the CallStack which is present in the JS Engine 
Whenever JS Program is run, a Global Execution context is created and the GEC is pushed in the callStack and all the codes will be executed there in the GEC

*/



/* All the callBacks functions which  comes through Promises will go inside MicroTask Queue */
// Promises and MutationObserver go inside MicroTask Queue -> Higher Priority
// The callback functions from Dom API's, fetch(), and all other remaining functions of Browser/Node API will go in the callBack Queue als


/* There is a Possibility that tasks inside callbacks Queue will go under starvation becuase of indefinite number of tasks in the MicroTask Queue*/