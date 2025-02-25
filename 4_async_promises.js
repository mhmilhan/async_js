const auth = true;
const paymentSuccess = true;
const marks = 80;

function login() {
    console.log("Login Start");

    const promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            if(auth) {
                resolve();
            } else {
                reject("Credentials are not correct");
            }
        }, 1000)
    });

    return promise;
}


function enroll() {
    console.log("Course enrollment is in progress");

    const promise = new Promise(function(resolve, reject) {
        setTimeout(function(){
            if(paymentSuccess) {
                resolve();
            } else {
                reject("payment failed!");
            }
        }, 3000)
    });

    return promise;
}

function progress() {
    console.log("Learning is start");

    const promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            if(marks >= 80 ) {
                resolve();
            } else {
                reject("Your mark is not enough for certificate!")
            }
        }, 5000) 
    });

    return promise;
}


function getCertificate() {
    console.log("Preparing Certificate");

    const promise = new Promise(function(resolve) {
        setTimeout(function(){
            resolve("Congrats! This is your certificate");
        }, 1000)
    });

    return promise;
}

login()
    .then(enroll)
    .then(progress)
    .then(getCertificate)
    .then(function(value){
        console.log(value);
    })

    /*  এতক্ষণ আমাদের এনোনিমাস ফাংশন প্রয়োজন হয় নাই কারণ ডিফাইন করা ফাংশন ছিলো। কিন্তু getCertificate এর পরে লাগতেছে কারণ এরপরে আর কোনো ফাংশন নাই। */

    .catch(function(err){
        console.log(err);
    })
