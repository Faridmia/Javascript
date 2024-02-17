

function myMove() {
    let id = null;
    let ele = document.querySelector('.animate');
    let pos = 0;
    id = setInterval(frame, 5);

    function frame() {

        if(pos < 350 ) {
            pos++;
            ele.style.top = pos + 'px';
            ele.style.left = pos + 'px';
        } else {
            clearInterval(id);
        }
       
    }
}