const book = document.querySelector('.book');
const btnNext = document.querySelector('.page_next');
const btnPrev = document.querySelector('.page_prev');

let bookImg = [
    {
        left : '01',
        right : '02'
    },
    {
        left : '03',
        right : '04'
    },
    {
        left : '05',
        right : '06'
    },
    {
        left : '07',
        right : '08'
    },
    {
        left : '09',
        right : '10'
    },
    {
        left : '11',
        right : '12'
    },
    {
        left : '13',
        right : '14'
    },
    {
        left : '15',
        right : '16'
    }
];
let curPage = '';
bookImg.forEach( (element) => {
    curPage += `<div>
        <figure><img src="./img/ecology/p_${element.left}.gif" alt="p${element.left}"></figure>
        <figure><img src="./img/ecology/p_${element.right}.gif" alt="p${element.right}}"></figure>
    </div>`;
})
book.innerHTML = curPage;

const page = document.querySelectorAll('.book div');
let idx = 0;

page[0].classList.add('active');
function nextPage(i) {
    page[i-1].classList.remove('active');
    page[i].classList.add('active');
}
function prevPage(i){
    page[i].classList.remove('active');
    page[i-1].classList.add('active');
}

btnNext.addEventListener('click', function(){
    if(idx < page.length-1){
        nextPage(++idx);
    }
})
btnPrev.addEventListener('click', function(){
    if(idx > 0){
        prevPage(idx--);
    }
})