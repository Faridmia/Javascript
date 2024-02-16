const paymentSuccess = true;

const marks = 70;

function enroll(callback) {
    console.log("course enrollment is in progress!");

    const promise = new Promise(function(resolve,reject) {
        setTimeout(function () {
            if (paymentSuccess) {
                resolve();
            } else {
                reject("payment failed");
            }
        }, 2000);
    });

    return promise;
}


function progress(callback) {
    console.log("course on progress..");

    const promise = new Promise(function(resolve,reject) {
        setTimeout(function () {
            if (marks >= 80 ) {
                resolve();
            } else {
                reject("you could not get enough marks to get the certificate..");
            }
        }, 3000);
    });

    return promise;
}

function getCertificate() {
    console.log("preparing your certificate..");
    const promise = new Promise(function(resolve) {
        setTimeout(() => {
            resolve("Congrates! you get the certificate");
        }, 1000 );
    });

    return promise;
}


async function course() {

    try {
        await enroll();
        await progress();
        const message = await getCertificate();
        console.log(message);
    } catch(err) {
        console.log(err);
    }
}

course();