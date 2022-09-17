/* navbar sticky - open */

window.addEventListener('scroll', function(){
    var headerContent = document.querySelector(".header_top");
    headerContent.classList.toggle("sticky",window.scrollY > 0);
})

/* navbar sticky - close */

/* scroll-to-top button - start */

const gotobtn = document.querySelector(".gotobtn");

window.addEventListener("scroll", () => {
    if(window.pageYOffset > 800){
        gotobtn.classList.add("active_up");
    }else{
        gotobtn.classList.remove("active_up");
    }
})

/* scroll-to-top button - end */

 /* humburger menu - JS open*/
 const burger = document.querySelector('.burger');
 const navMain = document.querySelector('.nav_menu');

burger.addEventListener('click', () => {
    navMain.classList.toggle('active');
    burger.classList.toggle('toggle');
})

// Body Not-Scroll
const menuBtn = document.querySelector(".burger");
let menuOpen = false;
var x = document.getElementsByTagName("BODY")[0];

    menuBtn.addEventListener('click', () => {
        if (!menuOpen) {
            menuBtn.classList.add('open');
            menuOpen = true;
            x.style.overflow = 'hidden';
        }
        else{
            menuBtn.classList.remove('open');
            menuOpen = false;
            x.style.overflow = 'visible';
        }
    });
    
/* humburger menu - JS close*/


// Scroll Spy - Menu
// variables
let links = document.querySelectorAll('li a');
let sections = document.querySelectorAll('section');


// add class active & go to section When navigate Links
links.forEach((link)=>{
  link.addEventListener('click',(e)=>{
    let ele = document.querySelector(`section.${e.target.id}`)
    ele.scrollIntoView({
      behavior:"smooth"
    })
    links.forEach(el=>{el.classList.remove('nav_active')})
    e.target.classList.add('nav_active')
  })
})

// add class active & go to section When scroll Links
window.onscroll = ()=>{
  sections.forEach(section =>{
    if(window.scrollY >= section.offsetTop && window.scrollY < section.offsetTop + section.offsetHeight){

      let ele = document.querySelector(`#${section.classList[0]}`)

      links.forEach(li=>{
        li.classList.remove('nav_active');
      })


      ele.classList.add('nav_active');
    }
  })
}
