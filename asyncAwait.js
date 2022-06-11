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


placeOrder('coffee').then(function(orderFromCustomer){
    console.log(`Request Recived !`);
    let orderIsProcessed = processOrder(orderFromCustomer);
    return orderIsProcessed;
}).then(function(orderIsProcessed){
    console.log(orderIsProcessed);
}).catch(function(err){
    console.log(err);
})