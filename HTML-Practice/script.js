let menuIcon=document.querySelector('#menu-icon');
let navbar=document.querySelector('.navbar');

menuIcon.onclick=() =>{
    menuIcon.classList.toggle('fa-bars')
    navbar.classList.toggle('active')
    menuIcon.classList.toggle('fa-times')    
}
