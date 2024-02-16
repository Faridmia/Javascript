const paymentSuccess = true;

const marks = 70;

function enroll(callback) {
  console.log("course enrollment is in progress!");

  setTimeout(function () {
    if (paymentSuccess) {
      callback();
    } else {
      console.log("payment failed");
    }
  }, 2000);
}

function progress(callback) {
    console.log("course on progress..");

    setTimeout(function () {
        if (marks >= 80 ) {
          callback();
        } else {
          console.log("you could not get enough marks to get the certificate..");
        }
    }, 3000);
}

function getCertificate() {
    console.log("preparing your certificate..");

    setTimeout(() => {
        console.log("Congrates! you get the certificate");
    }, 1000 );
}


enroll(function() {
    progress(getCertificate());
});
