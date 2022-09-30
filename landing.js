
let CountButtonHomeClicks = 1
 var links = document.getElementById("three-lines");

 links.addEventListener('click', event => {
   let link = document.getElementById('links')
    CountButtonHomeClicks += 1
    if (CountButtonHomeClicks % 2 == 0) {
      link.style.display = 'block'
      let bars = document.getElementsByClassName('fa-bars')[0]
      bars.classList.remove('fa-bars')
      bars.classList.add('fa-x')

   } else {
      let bar = document.getElementsByClassName('fa-x')[0]
      bar.classList.remove('fa-x')
      bar.classList.add('fa-bars')
      link.style.display = 'none'
   }

})


window.addEventListener('scroll', () => {
  const height = document.documentElement.scrollHeight - window.innerHeight
  const scrolled = window.scrollY;
  const backToTop = document.getElementById('back')

  console.log(Math.ceil(scrolled))
  if(Math.ceil(scrolled) > height - 100) {
     backToTop.style.backgroundColor ='#1597BB'
     console.log('true')
    } else {
      backToTop.style.backgroundColor = null
    }
 })


 const faders = document.querySelectorAll('.fade-in')
 const cards = document.querySelectorAll('.cards')

 const appearOptions = {
   threshold: 0,
   rootMargin: "0px 0px -300px 0px"
 }

 const appearOnScroll = new IntersectionObserver
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

 faders.forEach(fader => {
  appearOnScroll.observe(fader)
 })

 cards.forEach(card => {
  appearOnScroll.observe(card)
 })
