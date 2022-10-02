
// Set the counter for clicks
let CountButtonHomeClicks = 1
 var links = document.getElementById("three-lines");

 links.addEventListener('click', event => {
   let link = document.getElementById('links')
  //  each click checks if it is a odd number or even
    CountButtonHomeClicks += 1
    // if even then displaysthe navbar links and changes the nav image to x from three lines
    if (CountButtonHomeClicks % 2 == 0) {
      link.style.display = 'block'
      let bars = document.getElementsByClassName('fa-bars')[0]
      bars.classList.remove('fa-bars')
      bars.classList.add('fa-x')
    // removes the nav links to a simple navbar
   } else {
      let bar = document.getElementsByClassName('fa-x')[0]
      bar.classList.remove('fa-x')
      bar.classList.add('fa-bars')
      link.style.display = 'none'
   }

})


// adding a listener on scroll
window.addEventListener('scroll', () => {
  // checking the height of the window
  const height = document.documentElement.scrollHeight - window.innerHeight
  const scrolled = window.scrollY;
  const backToTop = document.getElementById('back')

  //  if scroleed is bigger than height - 100 changes the color of the button
  if(Math.ceil(scrolled) > height - 100) {
     backToTop.style.opacity = '1'
    //  else no color
    } else {
      backToTop.style.opacity = '0'
    }
 })


 const faders = document.querySelectorAll('.fade-in')
 const cards = document.querySelectorAll('.cards')

//  setting appear option on -300px on scrolling point
 const appearOptions = {
   threshold: 0,
   rootMargin: "0px 0px -300px 0px"
 }

//  setting new observer
 const appearOnScroll = new IntersectionObserver
//  function that adds the appear class and the appea options
 (function(entries, appearOnScroll) {
   entries.forEach(entry => {
    if(!entry.isIntersecting) {
      return;
    } else {
      entry.target.classList.add('appear');
      appearOnScroll.unobserve(entry.target)
    }
   })
 }, appearOptions)


  //  observe only on the elements of the class fade-in
 cards.forEach(card => {
  appearOnScroll.observe(card)
 })


//  changing the background color on click of the icon

const color = document.getElementById('sun')
const html = document.querySelector("html")
// console.log(html)

color.addEventListener('click', event => {
  CountButtonHomeClicks += 1
  if (CountButtonHomeClicks % 2 == 0) {
    html.style.backgroundColor = '#90afc5'
  } else {
    html.style.backgroundColor = null
  }
})
