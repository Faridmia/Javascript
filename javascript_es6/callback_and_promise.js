(function ($) {

    // let list = [];
    // $.get('https://jsonplaceholder.typicode.com/posts', ( response ) => {

    //     console.log(response);

    //     const id = 1;

    //     $.get(`https://jsonplaceholder.typicode.com/posts/${id}`, (response) => {

    //         console.log(response);

    //         $.get(`https://jsonplaceholder.typicode.com/posts/1/comments`, (response) => {
    //             console.log(response);
    //         }).fail(err => {
    //             console.log(err);
    //         })
    //     }).fail(err => {
    //         console.log(err);
    //     })

    // }).fail(err => {
    //     console.log(err);
    // })

}(jQuery));


const postListPromise = new Promise(( resolve,reject ) => {
    $.get('https://jsonplaceholder.typicode.com/posts', ( data ) => {
       // console.log("get  post list response => ", data );
        resolve(data);
    }).fail(err => {
        reject(new Error(`Call failed for get post list request with status ${err.status}`));
    })
})

postListPromise.then((response) => {
    console.log("call success");
    console.log("Then response => ", response );
}).catch((error) => {
    console.log("call failed");
    console.log('catch error => ', error );
})

