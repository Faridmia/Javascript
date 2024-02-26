function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    //console.log(expires);

    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    // name=Sumit Saha; username=sumit
    
    let name = cname + "=";
    
    let ca = document.cookie.split(";");
    
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) === " ") {
            c = c.substring(1);
        }

        if (c.indexOf(name) === 0) {
            return c.substring(name.length);
        }
    }

    return "";
}

function checkCookie(cname, exdays) {
    let a = getCookie(cname);
    if (a != "") {
        alert("Welcome again " + a);
    } else {
        let bname = prompt("Please enter your name:", "");
        if (bname != "" && bname != null) {
            setCookie(cname, bname, exdays);
        }
    }
}
