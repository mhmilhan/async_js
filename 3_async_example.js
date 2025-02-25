const auth = true;
const paymentSuccess = true;
const marks = 80;

function login(callback) {
    console.log("Login Start")
    setTimeout(function() {
        if(auth) {
            callback();
        } else {
            console.log("Credential is not correct!");
        }
    }, 1000)
}

function enroll(callback) {
    console.log("Course enrollment is in progress");
    
    setTimeout(function(){
        if(paymentSuccess) {
            callback();
        } else {
            console.log("payment failed!");
        }
    }, 3000)
}

function progress(callback) {
    console.log("Learning is start");

    setTimeout(function() {
        if(marks >= 80 ) {
            callback();
        } else {
            console.log("Your mark is not enough for certificate!");
        }
    }, 5000) 
}

function getCertificate() {
    console.log("Preparing Certificate");
    
    setTimeout(function(){
        console.log("Congrats! This is your certificate");
    }, 1000)
}

login(function (){
    enroll(function(){
        progress(getCertificate);
    });
});