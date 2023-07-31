//Menu 1 : blob

const btnMenu = document.querySelector('.btn-menu');
const containerMenu = document.querySelector('.container-menu');

btnMenu.addEventListener('click', () => {
    containerMenu.classList.toggle('active');
});

//Menu 2 : cursor

const cursor = document.querySelector('.cursor');
const menu2 = document.querySelector('.box2 ');
const allLinks = document.querySelectorAll('.box2 nav ul li');
let x,y;

window.addEventListener('resize', () => {
    x = menu2.offsetTop
    y = menu2.offsetLeft
})
window.addEventListener('load', () => {
    x = menu2.offsetTop
    y = menu2.offsetLeft
})

menu2.addEventListener('mousemove', e => {
    cursor.style.top = `${e.pageY - x -20}px`
    cursor.style.left = `${e.pageX - y -20}px`
    cursor.style.display = "block"
});

menu2.addEventListener('mouseout', () => {
    cursor.style.display = "none"
});


allLinks.forEach(link => {
    const location = link.getAttribute('data-loc');
    link.addEventListener('mouseenter', () => {
        cursor.classList.add('hovered');
        cursor.style.backgroundImage = `url(ressources/${location}.jpg)`;
    });
    link.addEventListener('mouseout', () => {
        cursor.classList.remove('hovered');
        cursor.style.backgroundImage = `none`;
    });
    
});










