const book = document.querySelector('.book');
const btnNext = document.querySelector('.page_next');
const btnPrev = document.querySelector('.page_prev');

fetch( "./eco.json" )
.then( (str) => ( str.json() ))
.then( (data) => {

    let viewWidth = window.innerWidth;
    let curPage = '';
    let pagePC;
    let pageSM;
    let idx = 0;

    // resize시 출력 형태 변경
    window.addEventListener('resize', function(){ 
        viewWidth = window.innerWidth;
        printBook();
    })

    function printBook(){
        idx = 0;
        curPage = '';
        if(viewWidth > 500){
            // book PC 출력
            data.book_PC.forEach( (obj, idx) => { 
                curPage += `<div class="PC">
                <figure><img src="./img/ecology/${obj.left}" alt="p${idx}_left"></figure>
                <figure><img src="./img/ecology/${obj.right}" alt="p${idx}_right}"></figure>
                </div>`;
            })
            book.innerHTML = curPage;
        } else if(viewWidth <= 500){ 
            // book mobile 출력
            data.book_SM.forEach( (obj, idx) => { 
                curPage += `<div class="SM">
                <figure><img src="./img/ecology/${obj.img}" alt="p${idx}"></figure>
                </div>`;
            })
            book.innerHTML = curPage;
        }
        
        pagePC = document.querySelectorAll('.book .PC');
        pageSM = document.querySelectorAll('.book .SM');

        // 초기 화면 출력
        if(viewWidth > 500){
            pagePC[0].classList.add('active');
        } else if(viewWidth <= 500) {
            pageSM[0].classList.add('active');
        }
        
    }
    printBook();

    // 페이지 전환 함수
    function nextPagePC(i) {
        pagePC[i-1].classList.remove('active');
        pagePC[i].classList.add('active');
    }
    function prevPagePC(i){
        pagePC[i].classList.remove('active');
        pagePC[i-1].classList.add('active');
    }

    function nextPageSM(i){
        pageSM[i-1].classList.remove('active');
        pageSM[i].classList.add('active');
    }
    function prevPageSM(i){
        pageSM[i].classList.remove('active');
        pageSM[i-1].classList.add('active');
    }

    // 버튼 기능
    btnNext.addEventListener('click', function(){
        if(idx < pagePC.length-1 && viewWidth > 500){
            nextPagePC(++idx);
        } else if ( idx < pageSM.length - 1 && viewWidth <= 500){
            console.log(idx, pageSM.length-1)
            nextPageSM(++idx);
        }
    })
    btnPrev.addEventListener('click', function(){
        if(idx > 0 && viewWidth > 500){
            prevPagePC(idx--);
        } else if ( idx > 0 && viewWidth <= 500){
            prevPageSM(idx--);
        }
    })
})