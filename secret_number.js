'use strict';
module.exports = function (){

    //declare num outside of the function so it runs once. The return will reference the global variable if it doesn't have a local one.
    const num = Math.floor(Math.random() * 1000000);
    return function secretNumber(){
        console.log(num);
        return num;
    }
};

