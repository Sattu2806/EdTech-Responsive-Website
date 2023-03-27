const nav = document.querySelector('.nav-list');
const navButton = document.querySelector('.hamburger');

navButton.addEventListener('click', showSidebar);

function showSidebar(){
    if(nav.classList.contains('visible')){
        nav.classList.remove('visible');
        navButton.style.setProperty('--beforeDisplay', 'block')
        hamburger.style.setProperty('--rotate', '0deg');
        hamburger.style.setProperty('--afterRotate', '0deg');
        hamburger.style.setProperty('--bottom', '-10px');
        hamburger.style.setProperty('--top', '-9px');
    }else{
        nav.classList.add('visible');
        hamburger.style.setProperty('--beforeDisplay', 'none')
        hamburger.style.setProperty('--rotate', '135deg');
        hamburger.style.setProperty('--afterRotate', '-270deg');
        hamburger.style.setProperty('--bottom', '0');
        hamburger.style.setProperty('--top', '0');
    }
}

let hamburger = document.querySelector('.hamburger');
// let afterHamburger = window.getComputedStyle(hamburger, '::after');
// let beforeHamburger = window.getComputedStyle(hamburger, '::before');

// console.log(afterHamburger.backgroundColor);

// afterHamburger.width = 100px;