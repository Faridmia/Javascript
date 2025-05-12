// closure

const { reject } = require("lodash");

function outer() {
    let name = 'Adrit';

    function inner() {
        console.log( name );
    }

    return inner;
}

const func = outer();

func();

const myPromise = new Promise( ( resolve, reject ) => {
    const success = true;

    success ? resolve("Done") : reject("failed");
});

const getUser = () => {
     const url = "https://jsonplaceholder.typicode.com/users/1";

    return fetch( url )
        .then( response => {
            if( !response.ok) {
                throw new Error("network response was not ok");
            }
            return response.json();
        })
        .then( data => {
            console.log("user info: ", data );
           return data;
        })
        .catch( error => {
            console.log( "something went wrong", error );
        });
};

getUser().then(data => {
  console.log("User name is:", data.name);
});

const showUser = async () => {
    const user = await getUser();
    console.log( "User Id:", user.id );
}

showUser();

