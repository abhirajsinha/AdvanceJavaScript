function placeOrder(drink){
    return new Promise(function(resolve,reject){
        if(drink==='coffee'){
            resolve('Order Placed');
        }else{
            reject('Sorry, we only serve coffee')
        }
    })
}

function processOrder(Order){
    return new Promise(function(resolve){
        console.log('Order is being processed!');
        resolve(`Coffee Served for the ${Order}`);
    })
}


// placeOrder('coffee').then(function(orderFromCustomer){
//     console.log(`Request Recived !`);
//     let orderIsProcessed = processOrder(orderFromCustomer);
//     return orderIsProcessed;
// }).then(function(orderIsProcessed){
//     console.log(orderIsProcessed);
// }).catch(function(err){
//     console.log(err);
// })




// Same Problem with Async Await
// Async Await -> Clean version of Promises , works same as Promises
async function serveOrder(){
    try{
        const orderReceived = await placeOrder('coffee');
        console.log(`Order Received`);
        const processedOrder =await processOrder(orderReceived);
        console.log(processedOrder);
    }catch(err){
        console.log(err);
    }
}

serveOrder();