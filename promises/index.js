function success(){
    console.log("Success!");
}

function failure(){
    console.log("Failure!");
}

Promise.reject().then(success, failure);
Promise.resolve().then(success, failure);