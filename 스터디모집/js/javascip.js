const btn = document.querySelector('.btn-menu');
const nav = document.querySelector('.main-nav');

// 버틀을 클릭하면
btn.addEventListener('click', () => {
    // nav 요소의 클레스에 open-menu 를 토클한다.
    nav.classList.toggle('open-menu');
    // 만약 btn 요소의 innerHTML이 'menu'일 경우,
    if(btn.innerHTML === 'menu') {
        //btn 요소의 innerHTML을 'close'로 변경
        btn.innerHTML = 'close';
    
    }
    else{
        //btn 요소의 innerHTML을 'menu'로 변경
        btn.innerHTML ='Menu';
    }
});
