let btn_1 = document.querySelector('#btn_1');
let btn_2 = document.querySelector('#btn_2');
let modal = document.querySelector('#modal');
btn_1.onclick = show;
btn_2.onclick = hide;
hide();
function show(){
    modal.hidden = false;
}
function hide(){
    modal.hidden = true;
}



