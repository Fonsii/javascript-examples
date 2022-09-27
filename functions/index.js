//saySomething(phrase="One");
saySomething();

// function saySomething(phrase) {
//   console.log(phrase);
// }

// function saySomething() {
//     if (arguments.length > 0) {
//         console.log(arguments[0]);
//     }else{
//         console.log("No phrase");
//     }
// }


function saySomething(){
    switch(arguments.length){
        case 0:
            console.log("No phrase");
            break;
        default:
            console.log(arguments[0]);
            break;
    }
}