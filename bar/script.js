const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
const we = document.querySelector('.we');
const wemenu = document.querySelector('.wemenu');

burger.addEventListener('click', function(){

    menu.classList.toggle('active')
    we.addEventListener('click', function(){
        wemenu.classList.remove('active')
    })
})
wemenu.addEventListener('click', function(){
    wemenu.classList.add('active')
})

