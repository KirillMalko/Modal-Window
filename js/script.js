let modal = document.querySelector('.modal');
let btn_1 = document.querySelector('#btn_1');
let btn_2 = document.querySelector('#btn_2');
let btn_3 = document.querySelector('#refresh');
let btn_4 = document.querySelector('#other');

function show() {
    modal.hidden = false;
    modal.style.borderRadius = "10px";
}

function hide() {
    modal.hidden = true;

}

function refresh() {
    location.reload();
}

function other() {
    modal.style.borderWidth = "5px";
    modal.style.background = "#15631";
    modal.style.backgroundColor = "#bccd14";

}

btn_1.onclick = show;
btn_2.onclick = hide;
btn_3.onclick = refresh;
btn_4.onclick = other;

hide();