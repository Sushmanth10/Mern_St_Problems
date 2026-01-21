console.log("Function Hoisting and function scope");

function classicFuntion(num, bool, str){
    console.log("Inside classic Function");
    console.log(num, bool, str);
    let username = "Sushmanth katta classic"
    console.log(username);
}

classicFuntion(1, true, "hello world!");

const arrowfunction = (num , bool, str) => {
    console.log("Inside Arrow Function");
    console.log(num, bool, str);
    let username = "Sushmanth katta classic"
    console.log(username);
}

//() => {}
arrowfunction(1, true, "hello world!");


 