const btn_menu = document.querySelector('.btn_menu');
const nav = document.querySelector('.nav');

btn_menu.addEventListener('click', () => {
    btn_menu.classList.toggle('active');
    nav.classList.toggle('active');
})


const pageTop = document.querySelector('.container .page_top figure')

pageTop.addEventListener('click', () => {
    window.scrollTo({
        left: 0,
        top: 0,
        behavior: 'smooth'
    })
})


const elSnowCont = document.querySelector('.snow');

let elP = '';
for(let i = 0; i < 20; i++){
    elP += `<p></p>`;
}
elSnowCont.innerHTML = elP; 

const elSnow = document.querySelectorAll('.snow p');

let snowProp = function(n){
    return Math.floor( Math.random() * n + 15 );
}
let windowWid = window.innerWidth;
let snowPosi = function(n){
    return Math.floor( Math.random() * n );
}
let snowAni = function(n){
    return Math.floor( Math.random() * n + 10 );
}
elSnow.forEach(function(p,i){
    snowProp()
    let snowSize = snowProp(25);
    elSnow[i].style = `width: ${snowSize}px; height: ${snowSize}px; left: ${snowPosi(windowWid)}px; animation: snow_fall ${snowProp(30)}s ${snowAni(20)}s linear infinite, snow_rotate 10s linear infinite`;
});