// HAMBURGER BUTTON START 

let HamburgetBtn = document.querySelector('.header__btn')
let headerNav = document.querySelector('.nav')
let headerIcon = document.getElementById('header__burger__icon')
let heroContainer = document.querySelector('.hero__container')

HamburgetBtn.addEventListener('click', () =>{
  headerNav.classList.toggle('show')
})

let count = 0;

HamburgetBtn.addEventListener('click', () =>{
  if (count == 0){
    headerIcon.className='bx bx-x';
    count = 1;
  }
  else{
    headerIcon.className = 'bx bx-menu';
    count = 0;
  }
})

// HAMBURGER BUTTON END 


// WINDOW SCROLL START 

let header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if(window.scrollY > 0){
    header.classList.add('scrolling-active');
    heroContainer.classList.add('header-white')
  }
  else{
    header.classList.remove('scrolling-active')
    heroContainer.classList.remove('header-white')

  }
})

// WINDOW SCROLL END 


let elSetting = document.querySelector(".color__icon-box");
let num = 0;

elSetting.addEventListener("click", () => {
  if(num == 0){
    elSetting.parentNode.style.right = "0px";
    num++;
  } else {
    elSetting.parentElement.style.right = "-200px";
    num = 0;
  }
});

let elColorBtns = document.querySelectorAll(".color__btn");

elColorBtns.forEach(item => {
  item.addEventListener("click", () => {
    document.body.className = "";
    document.body.classList.add(item.classList[1]);
  })
})