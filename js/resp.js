const burger = document.querySelector('.burger');
const navbar = document.querySelector('.navbar');
const navbar_list = document.getElementById('navbar_list');
const right_nav = document.getElementById('right_nav');


burger.addEventListener('click',()=>{
    navbar_list.classList.toggle('visibility-res');
    right_nav.classList.toggle('visibility-res');
    navbar.classList.toggle('height-nav-res');
})