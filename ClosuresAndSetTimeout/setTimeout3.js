/* Now here we want to print 1 to 5 in each second wihtout even replacing var to let */

/* 
    So as we know that var is not working because we are not able to create the new refrence of i every time,
    that's why we have used let to create a new refrence of i everytime

    Now, here also we will do the same thing we will create the new refrence of i everytime but without using let
*/


function x() {
    for (var i = 1; i <= 5; i++) {
        function close(i) {
            setTimeout(function () {
                console.log(`Value of i after`, i, 'Seconds', i);
            }, 1000);
        }
        close(i);
    }
    
    console.log(`Print values 1 to 5 one by one after 1 second`);
}

x();