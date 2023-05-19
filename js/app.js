let menuBtn = document.querySelector('.menu_icon');

let sidebar = document.querySelector('#sidebar')

let navInput = document.querySelector('.nav_input')





function btn_click (){
    sidebar.classList.toggle('active')
}

menuBtn.addEventListener("click",  btn_click);


function serachKeyup (){
    let search_close = document.querySelector('.input-inner-bt')
    search_close.classList.add('on')
}

navInput.addEventListener("keypress", serachKeyup);



