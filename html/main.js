const hamburger = document.querySelector('#ham_menu_button');
const close = document.querySelector('#nav-close-btn');
const nav = document.querySelector('.mobile-nav');
const arr = [hamburger,close]
arr.forEach((e) =>{
  e.addEventListener('click', (e) => {
    e.preventDefault();
  close.classList.toggle("visible");
  hamburger.classList.toggle("hidden");
  nav.classList.toggle("visible");
  })
})

const speakerData = [
  {
    image: '',
    name: '',
    position: '',
    bio: '',
  },
]


