const introContent = document.querySelector('.film_intro');
const navBg = document.querySelector('.film_nav');
const bgBef = document.querySelector('.film_nav::before');
const bgAft = document.querySelector('.film_nav::after');
const filmNavBtn = document.querySelectorAll('.film_nav > ul a');
const filmNav = document.querySelectorAll('.film_nav li');
const seriesTab = document.querySelector('.series_nav');
const seriesNav = document.querySelectorAll('.series_nav li');
const seriesNavBtn = document.querySelectorAll('.series_nav a');
const seriesImg = document.querySelectorAll('.series_nav a img');

contentURL('./film_content.html');
filmNav[0].classList.add('active');

function contentURL(url){
    fetch(url)
    .then(res=>res.text())
    .then(data => {
        introContent.innerHTML = data;
    })
}

// filmNavBtn이 돌 때 filmNav active href url 입력
// filmNav[1] active 일 때 '.series_Nav' display block, seriesNavBtn이 돌 때 seriesNav active img 변경 href url 입력
let actTemp = 0;
filmNavBtn.forEach((ele, key) => { // film navigation tab
    ele.addEventListener('click', function(){
        event.preventDefault();
        filmNav.forEach((e) => { // film navigation li
            e.classList.remove('active');
            navBg.classList.remove(`active${actTemp}`);
        })
        let url = ele.getAttribute('href');
        filmNav[key].classList.add('active');
        navBg.classList.add(`active${key + 1}`);
        actTemp = key + 1;
        bgColor(key);
        if( filmNav[1].classList.contains('active') ){
            seriesTab.style = 'display: block;'; // series navigation visible
            seriesNav[0].classList.add('active');
            introContent.style = 'margin: 100px auto 0;';
        } else {
            seriesTab.style = 'display: none;';
            introContent.style = 'margin: 60px auto 0;';
        }
        contentURL(url);
    })
})

let color = [ '#ffcd46', '#00a1e9', '#ff7d9d' ];

function bgColor(idx){
    navBg.style = `background-color: ${color[idx]}`;
}

let temp = 0;
seriesNavBtn.forEach( (ele, key) => {
    ele.addEventListener('click', function(){
        event.preventDefault();

        seriesNav.forEach((e) => {
            e.classList.remove('active');
        })

        let origUrl = ele.getAttribute('href');
        seriesNav[key].classList.add('active');

        seriesImg[temp].src = `./img/film/original/s_0${temp+1}_off.png`;
        seriesImg[key].src = `./img/film/original/s_0${key + 1}_on.png`;
        temp = key;

        contentURL(origUrl);
    })
})

