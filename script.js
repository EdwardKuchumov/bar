const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.menu');
const we = document.querySelector('.we');
const we2 = document.querySelector('.we2');
const wemenu = document.querySelector('.wemenu');
const wemenu2 = document.querySelector('.wemenu2');
const burgEl = document.querySelector('.burger')

burger.addEventListener('click', function(){
    
    menu.classList.toggle('active')
    we.addEventListener('click', function(){
        wemenu.classList.remove('active')
    })
    we2.addEventListener('click', function(){
        wemenu2.classList.remove('active')
    })
})
wemenu.addEventListener('click', function(){
    wemenu.classList.add('active')
})
wemenu2.addEventListener('click', function(){
    wemenu2.classList.add('active')
})

