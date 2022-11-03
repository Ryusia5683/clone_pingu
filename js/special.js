const spBtn = document.querySelectorAll('.craft_nav a');
const spTab = document.querySelectorAll('.craft_nav li');
const contentBg = document.querySelector('.content_txt');
const content = document.querySelector('.content_change');


contentURL('./special_content.html');
spTab[0].classList.add('active');
// contentBg.classList.add('active1');

function contentURL(url){
    fetch(url)
    .then( res => res.text() )
    .then(data => {
        content.innerHTML = data;
    })
}

let actTemp = 0;
spBtn.forEach( (ele, key) => { // sp navigation tab
    ele.addEventListener('click', function(){
        event.preventDefault();

        spTab.forEach((e) => { // sp navigation li
            e.classList.remove('active');
            contentBg.classList.remove(`active${actTemp}`);
        })

        let url = ele.getAttribute('href');
        spTab[key].classList.add('active');
        contentBg.classList.add(`active${key + 1}`);
        actTemp = (key + 1);
        contentURL(url);
    })
})