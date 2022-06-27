function x() {
    var i = 1;
    setTimeout(function () {
        console.log(`Value of i after 3 seconds is`, i);
    }, 3000);

    console.log(`Working of setTimeOut Function`);
}

x();